import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
  username: string
  email: string
  channel: string
}

export function YouTubeForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => { 
    console.log('Form submitted', data);
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube Form Count: {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate style={{display: "flex", flexDirection: 'column', gap: '5px'}}>
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" {...register("username", {
          required: {     // if input exists, no error, else error message
            value: true,
            message: "Username is required" // default error handling: if input exists, no error, else error message
          }
        })}/>
        <p className='error'>{errors.username?.message}</p>

        <label htmlFor="email"> Email </label>
        <input type="email" id="email" {...register("email", {
          required: "Email is required", // default error handling: if input exists, no error, else errror message.
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, //regex pattern for email
            message: "Invalid email address" // invalid email error message
          }
        })}/>
        <p className='error'>{errors.email?.message}</p>


        <label htmlFor="channel"> Channel </label>
        <input type="text" id="channel" {...register("channel", {
          required: "Channel is required" // default error handling: if input exists, no error, else error message
        })}/>
        <p className='error'>{errors.channel?.message}</p>


        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
