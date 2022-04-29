import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { Button, Error, Form, Input, Textarea } from "./style.js";

const registerOptions = {
  name: {
    required: "Name is required",
    minLength: {
      value: 10,
      message: "Message must have at least 10 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 30,
      message: "Message must have at least 30 characters",
    },
  },
};

export default function ContactForm() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ms1ms1p",
        "template_hrjrfif",
        form.current,
        "Cik3jXZ_FLOBo9C88"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      reset()
  };

  return (
    <Form id="contact-form" onSubmit={handleSubmit(sendEmail)} ref={form}>
      <Input
        type="text"
        name="user_name"
        {...register("user_name", registerOptions.name)}
        placeholder="Name"
      />
      {errors.user_name && (
        <Error>
          <BiErrorCircle /> <span>{errors.user_name.message}</span>
        </Error>
      )}
      <Input
        type="email"
        name="user_email"
        placeholder="Email"
        {...register("user_email", registerOptions.email)}
      />
      {errors.user_email && (
        <Error>
          <BiErrorCircle /> <span>{errors.user_email.message}</span>
        </Error>
      )}
      <Textarea
        name="user_message"
        placeholder="Message"
        {...register("user_message", registerOptions.message)}
      />
      {errors.user_message && (
        <Error>
          <BiErrorCircle /> <span>{errors.user_message.message}</span>
        </Error>
      )}
      <Button type="submit" value="Send" />
    </Form>
  );
}
