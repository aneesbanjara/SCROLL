import React from 'react'
import Heading from './Heading'

const Card = () => {
  return (
    <div className='flex flex-col gap-2 h-[19rem] w-[20.5rem] p-3 rounded-[30px] bg-primary customShadow customAnimation max-sm:w-[13rem] max-xl:w-[25rem]'>
          <Heading height="h-2/3" width="w-full" color='bg-secondary' rounded='rounded-3xl'/>
          <div className='h-2/3'>
            <div className='flex gap-2'>
                <Heading height="h-10" width="w-12" color='bg-secondary' rounded='rounded-full'/>
                <div className='flex flex-col gap-2  w-full'>
                  <Heading height="h-4" width="w-full" color='bg-secondary' rounded='rounded-lg'/>
                  <Heading height="h-3.5" width="w-1/2" color='bg-secondary' rounded='rounded-lg'/>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Card