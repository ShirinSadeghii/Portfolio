import React from 'react'
import Logo from "../../public/logo.png";
import Image from 'next/image'


const Footer = () => { 
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-6 flex justify-between'>
            <Image src={Logo} alt='logo' className='h-20 w-20'/>
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer