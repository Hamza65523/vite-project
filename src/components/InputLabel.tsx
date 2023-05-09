import React from 'react'

const InputLabel = ({label}:any)=>{
    return(
      <div className=" flex flex-col mt-4">
        <label htmlFor="" className='text-[#978892]'>{label}</label>
        <input type="text" className='outline-none border-b border-[#978892]' />
      </div>
    )
  }
  

export default InputLabel