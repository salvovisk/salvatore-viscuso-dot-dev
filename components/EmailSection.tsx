"use client";

import { cn } from "@/utils/classMerge";
import axios from "axios";
import React, { FormEvent, useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";

interface ChildComponentProps {
  hideForm: (newValue: boolean) => void;
}
export const EmailSection = (props: ChildComponentProps) => {
  const [sendingEmail, setSendingEmail] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSendingEmail(true);

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }
    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response = await axios({
      method: "post",
      url: "/api/recaptchaSubmit",
      data: {
        gRecaptchaToken,
      },
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response?.data?.success === true) {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      console.log(data);
      const JSONdata = JSON.stringify(data);

      toast.promise(
        axios
          .post("/api/send", JSONdata)
          .then((res) => {
            console.log(res);
            console.log("Message sent.");
            setSendingEmail(false);
          })
          .then((error) => {
            console.log(error);
            setSendingEmail(false);
          }),
        {
          loading: "Sending email...",
          success: "Email sent correctly! Thank you :)",
          error: (err) => err.response.data.msg,
        },
        {
          style: {
            minWidth: "250px",
          },
          success: {
            duration: 3000,
          },
        }
      );
    } else {
      toast.error(
        "Sorry but this form is protected by reCaptcha and it looks like you are a robot 🤖 "
      );
      console.log(`Failure with score: ${response?.data?.score}`);
    }
  };

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='text-white block mb-2 text-sm font-medium'>
            Your email
          </label>
          <input
            name='email'
            type='email'
            id='email'
            autoComplete='off'
            required
            className='outline-none bg-slate-800  border-slate-600/60 border-b-2 focus:border-pink-400/80 placeholder-[#9CA2A9] text-gray-100 text-sm  w-full p-2.5'
            placeholder='yourawesomeemail@gmail.com'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='subject'
            className='text-white block text-sm mb-2 font-medium'>
            Subject
          </label>
          <input
            autoComplete='off'
            name='subject'
            type='text'
            id='subject'
            required
            className='outline-none bg-slate-800 border-slate-600/60 border-b-2 focus:border-pink-400/80 placeholder-[#9CA2A9] text-gray-100 text-sm  w-full p-2.5'
            placeholder='Just saying hi'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='text-white block text-sm mb-2 font-medium'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            autoComplete='off'
            className='outline-none bg-slate-800 border-2 border-slate-600/60 focus:border-pink-400/80 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="Let's talk about..."
            minLength={5}
          />
        </div>
        <button
          type='submit'
          disabled={sendingEmail}
          onSubmit={handleSubmit}
          className={cn(
            "w-2/3 self-center bg-pink-500 rounded-md h-10 text-white font-bold cursor-pointer outline-none focus:ring-1 shadow-lg transform active:scale-95 transition-transform duration-200 ",
            sendingEmail
              ? "bg-pink-500/20 text-gray-50/50 cursor-not-allowed"
              : ""
          )}>
          Send Message
        </button>
      </form>
    </div>
  );
};
