import React, { useState } from 'react'
import Logo from '../assets/download.png'
import Toggle from '../assets/toggle.png'
import {motion} from 'framer-motion'

export default function Navbar() {

    const [menu, setMenu] = useState(false);

    const toggle=()=>{
        setMenu(!menu);
    }


  return (
    <div className='w-[85%] mx-auto'>
    <div className='my-3 items-center flex justify-between'>
        <div className='flex gap-x-5 items-center'>
            <img src={Logo} alt="" className='w-14' />
            <i className='font-semibold'>Kshitiksha Foundation</i>
        </div>
        <div className='hidden lg:flex gap-x-4'>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }}>Home</i>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:720,
                    behavior:'smooth'
                })
            }}>About</i>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:2000,
                    behavior:'smooth'
                })
            }}>Contact Us</i>
        </div>
        <div className='hidden lg:flex gap-x-4'>
            <i className='font-medium px-2 py-1 rounded-md bg-green-500 text-white'>Contribute</i>
            <i className='font-medium'>Socials</i>
        </div>
        <div className='visible lg:hidden' onClick={toggle}>
            <img src={Toggle} alt="" className='w-16' />
        </div>
    </div>
    {menu && <motion.div className='lg:hidden mt-3 border-2 px-2 py-1 rounded'
    initial={{y:-10}}
    animate={{y:0}}
    >
    <div className='flex flex-col gap-x-4'>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }}>Home</i>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:1000,
                    behavior:'smooth'
                })
            }}>About</i>
            <i className='font-medium cursor-pointer' onClick={()=>{
                window.scrollTo({
                    top:3000,
                    behavior:'smooth'
                })
            }}>Contact Us</i>
        </div>
        <div className='flex flex-col gap-x-4 mt-2'>
            <i className='inline font-medium px-2 py-1 rounded-md bg-green-500 text-white'>Contribute</i>
            <i className='font-medium'>Socials</i>
        </div>
    </motion.div>}
    </div>
  )
}
