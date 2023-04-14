import React from 'react'
import { useSelector } from 'react-redux'
const DisplayContainer = () => {
    const selector=useSelector((state)=>{
        return state.shareReducer.inp
    })
    console.log(selector,"selector")
  return (
    <div>
        <h3 style={{
            textAlign:"center",
            color:"blue",
            marginTop:"25px",
            fontSize:"30px"
        }}>{selector}</h3>
    </div>
  )
}

export default DisplayContainer