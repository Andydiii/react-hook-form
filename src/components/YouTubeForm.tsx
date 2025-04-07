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
  // formState is an object that contains the state of the form
  // errors is an object that contains the errors of the form
  const { errors } = formState;

  const onSubmit = (data: FormValues) => { 
    console.log('Form submitted', data);
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube Form Count: {renderCount / 2}</h1>
      {/*handlesunmit is the built-in function that handles the form submission */}
      {/* where onsubmit is the customized function that handles the form submission */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate style={{display: "flex", flexDirection: 'column', gap: '5px'}}>
        
        {/* Username */}
        <label htmlFor="username"> Username </label>
        <p className='error'>{errors.username?.message}</p>
        {/* register is a function that registers the input field with the form, starts to automatically track the input field */}
        {/* second argument of register function is the validation rules */}
        <input type="text" id="username" {...register("username", {
          // not short cut method
          required: {     
            value: true, 
            message: "Username is required"
          }
        })}/>
        
        {/* Email */}
        <label htmlFor="email"> Email </label>
        <p className='error'>{errors.email?.message}</p>
        <input type="email" id="email" {...register("email", {
          // default error handling shortcut for required field: if input exists, no error, else errror message.
          required: "Email is required", 
          // default error handling regex pattern for email
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, //regex pattern for email
            message: "Invalid email address" // invalid email error message
          },
          // multiple custom validation uses object : AdminEmail/BlackListedDomain is like pattern/required above, one kind of validation
          validate: {
            // if email is admin@example.com, error message is "Dont use admin email"
            AdminEmail: (fieldValue) => {
              return fieldValue !== "admin@example.com" || "Dont use admin email";
            },
            // if email ends with baddomain.com, error message is "thie domain is not allowed"
            BlackListedDomain: (fieldValue) => {
              return !fieldValue.endsWith("baddomain.com") || "thie domain is not allowed";
            }
          }
        })}/>
        
        {/* Channel */}
        <label htmlFor="channel"> Channel </label>
        <p className='error'>{errors.channel?.message}</p>
        <input type="text" id="channel" {...register("channel", {
          required: "Channel is required", 
          validate: (fieldValue) => {
              return fieldValue !== "admin" || "You are not allowed to use this channel";
            }
        })}/>
        


        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
