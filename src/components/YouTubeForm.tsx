import React from 'react'
import { useForm } from 'react-hook-form'

export function YouTubeForm() {
  const form = useForm();

  return (
    <div>
      <form style={{display: "flex", flexDirection: 'column', gap: '5px'}}>
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" name="username"/>

        <label htmlFor="email"> Email </label>
        <input type="email" id="email" name="email"/>

        <label htmlFor="channel"> Username </label>
        <input type="text" id="channel" name="channel"/>

        <button>Submit</button>
      </form>
    </div>
  )
}
