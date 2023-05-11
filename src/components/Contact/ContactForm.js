import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { Button, Error, Form, Input, Textarea, Alert } from "./style.js";
import {  emailJsVariables, registerOptions } from "utils/data";


export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJsVariables.service_id,
        emailJsVariables.template_id,
        form.current,
        emailJsVariables.user_id
      )
      .then(
        (result) => {
          setStatus("SUCCESS");
          setMessage("Message sent successfully!");
        },
        (error) => {
          setStatus("FAILED");
          setMessage("Something went wrong, please try again!");
        }
      );
      reset()
  };

  useEffect(() => {
    if(status === 'SUCCESS' || status === 'FAILED') {
      setTimeout(() => {
        setStatus('');
        setMessage('');
      }, 3000);
    }
  }, [status]);


  return (
    <Form id="contact-form" onSubmit={handleSubmit(sendEmail)} ref={form}>
      {status && renderAlert(message)}
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


const renderAlert = (message) => (
  <Alert>{message}</Alert>
);