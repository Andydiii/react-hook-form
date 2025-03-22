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
  const { register, control, handleSubmit} = form;

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube Form Count: {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: 'column', gap: '5px'}}>
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" {...register("username")}/>

        <label htmlFor="email"> Email </label>
        <input type="email" id="email" {...register("email")}/>

        <label htmlFor="channel"> Channel </label>
        <input type="text" id="channel" {...register("channel")}/>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
