import React from 'react'
import Heading from './Heading'

const Card = () => {
  return (
    <div className='flex flex-col gap-2 h-80 w-1/2 p-4 rounded-[30px] bg-primary customShadow customAnimation max-sm:w-full max-md:w-full'>
          <Heading height="h-2/3" width="w-full" color='bg-secondary' rounded='rounded-3xl'/>
          <div className='h-2/3'>
            <div className='flex gap-2'>
                <Heading height="h-12" width="w-14" color='bg-primary' rounded='rounded-full'/>
                <div className='flex flex-col gap-2  w-full'>
                  <Heading height="h-6" width="w-full" color='bg-primary' rounded='rounded-lg'/>
                  <Heading height="h-4" width="w-1/2" color='bg-primary' rounded='rounded-lg'/>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Card