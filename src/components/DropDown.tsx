import React from 'react'

const DropDown = ({label}:any)=>{
    return(
      <div className="flex flex-col mt-4">
        <label htmlFor="" className='text-[#978892]'>{label}</label>
        <select name="" className='border-b border-[#978892]' id="">
            <option value=""></option>
        </select>
      </div>
    )
  }
  
export default DropDown