import React from 'react'
import logo from '../images/Logo.jpeg'
import {EnvelopeIcon} from '@heroicons/react/24/solid'
import {PhoneIcon} from '@heroicons/react/24/solid'

function Footer() {
  return (
    <footer className='bg-[#008000] mt-20 py-6 grid grid-cols-3 px-3'>
        
        <img 
        className='h-20 rounded-full'
     src={logo} /> 
        
        <div>
          <p className='text-xl font-serif font-bold text-white'>Achieving Excellence Together</p>
        </div>

        <div className='space-y-2  text-white '>
          <h3 className='text-xl font-serif font-bold'>contact us</h3>
          <div className='flex space-x-2'>
            <EnvelopeIcon className='h-6 '/>
            <p>Email : </p>
          </div>
          <div className='flex space-x-2'>
            <PhoneIcon className='h-6 '/>
            <p>Phone : </p>
          </div>
          
          
          
        </div>
    </footer>
  )
}

export default Footer