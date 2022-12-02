import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {}

function Contact({}: Props) {

  const { 
    register, 
    handleSubmit, 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:hagenau.andersen@gmail.com?subject=${formData.subject}&body=${formData.message}
    Best regards ${formData.name} (${formData.email})`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
                    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
        Contact Me
      </h3>
      
      <div className='flex flex-col space-y-4 md:space-y-10'>
        <h4 className='text-lg md:text-2xl xl:text-4xl font-semibold'> 
            For any sort of inquiries, feel free to {" "}
            <span className='underline decoration-[#FFE787]/50'>get in touch</span>
        </h4>

        <div className='space-y-2 md:space-y-8'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#FFE787] h-7 w-7 animate-pulse'/>
                <p className='text-base md:text-lg xl:text-2xl'>+45 12 34 56 78</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#FFE787] h-7 w-7 animate-pulse'/>
                <p className='text-base md:text-lg xl:text-2xl'>hagenau.andersen@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#FFE787] h-7 w-7 animate-pulse'/>
                <p className='text-base md:text-lg xl:text-2xl'>Denmark - Copenhagen</p>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} 
              className='flex flex-col space-y-2 w-80% mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput w-80%' type='text'/>
                <input {...register('email')} placeholder='Email' className='contactInput w-80%' type='email'/>
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <button className='bg-[#FFE787] py-5 px-10 rounded-md text-[#2E3138]/80 font-bold'>
                Submit
            </button>
        </form>

      </div>
    </div>
  )
}

export default Contact