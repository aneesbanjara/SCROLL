import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col gap-2 h-80 w-1/2 p-4 rounded-[30px] bg-[#EB837B66] customShadow customAnimation'>
          <div className='h-2/3 w-full  rounded-3xl bg-[#EB837B88] customShadow'>

          </div>
          <div className='h-2/3'>
            <div className='flex gap-2'>
                <div className='h-12 w-14 bg-[#EB837B66] rounded-full customShadow'>

                </div>
                <div className='flex flex-col gap-2  w-full'>
                  <div className='h-6 w-full bg-[#EB837B66] rounded-lg customShadow'>

                  </div>
                  <div className='h-4 w-1/2  bg-[#EB837B66] rounded-lg customShadow'>

                  </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Card