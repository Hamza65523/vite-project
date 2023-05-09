import React from 'react'
import DropDown from './DropDown'
import InputLabel from './InputLabel'

const Form =()=>{
    return(
      <div className="px-4 py-4 bg-white shadow-xl ">
        <div className="mb-10">
          <InputLabel label='Name'/>
          <DropDown label='Country'/>
          <DropDown label='Time zone'/>
        </div>
      </div>
    )
  }
export default Form