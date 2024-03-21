"use client"
import React, {useState} from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     }
    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     // FOrm the request for sending data to the server
    //     const options = {
    //         //the method is POST
    //         method: "POST",
    //         // tell the server we're sending JSON
    //         header: {
    //             "Content-Type": "application/json",
    //         },
    //         // Body of the request is the JSON data created above
    //         body: JSONdata
    //     }
    //     const response = await fetch(endpoint, options)
    //     const resData = await response.json()
    //     console.log(resData);

    //     if (response.status === 200) {
    //         console.log("Message sent")
    //     }
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "49e5023f-dae2-41e7-aede-b8d92f33a66d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log("Message sent", result);
            setEmailSubmitted(true)
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[85%] -left-3 transform -translate-x-1/2 -translate-y-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I&apos;m currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, send me a message and 
                I will get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    <Image src={GithubIcon} alt='Github Icon' />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt='LinkedIn Icon' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <label htmlFor='email'className='text-white block text-sm font-medium'>Your email</label>
                <input 
                name='email'
                type='email' 
                id='email' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='name@google.com'></input>
                 <label htmlFor='subject'className='text-white block text-sm font-medium'>Subject</label>
                <input 
                name='subject'
                type='text' 
                id='subject' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Enter information here'></input>
                <label htmlFor='message' className='text-white block text-sm font-medium'>
                    Message
                </label>
                <textarea 
                    name='message'
                    id='message'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Let's talk about...">
                </textarea>
                <button
                type='submit'
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send message
                </button>
                {
                    // if the email was submitted successfully, show success message.
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection