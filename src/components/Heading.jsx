import React from 'react'

const Heading = ({height="h-full", width="w-full",color="bg-primary", rounded="rounded-3xl"}) => {
  return (
    <div className={`${height} ${width} ${color} ${rounded} customShadow`}/>
  )
}   

export default Heading