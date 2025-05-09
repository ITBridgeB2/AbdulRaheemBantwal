import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function AddBlog() {

    const[formData,setFormData] =useState(
        {
            title:"",
            description:"",
            author:""

    })

    const navigate=useNavigate()


    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>({...prev,[name]:value}))


    }
  return (

    <div>
      
      <input type='text' placeholder='title'  onChange={handleChange} name='title'></input>
        <input type='text' placeholder='Description'  onChange={handleChange} name='description'></input>
        <input type='text' placeholder='Author'  onChange={handleChange} name='author'></input>
    </div>
  )
}
