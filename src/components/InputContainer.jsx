import React from 'react'
import './inputcontainer.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { shareData } from '../redux/action'
const InputContainer = () => {
    const dispatch=useDispatch();
    const[state,setState]=useState("")
  return (
    <div className='container'>
        <h1>Share data to child</h1>
        <input type='text' placeholder='Enter Text' className='inp' onChange={(e)=>{
            setState(e.target.value)
        }}/>
        <button className='but' onClick={()=>{
            dispatch(shareData(state))
        }}>Submit</button>
    </div>
  )
}

export default InputContainer