import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

//tag is input text field where you write wch type of gif u wnt and its give gif after api call
const Tag = () => {
  const [tag, setTag] = useState('car');                     //At starting car gif show in tag container me  
 
  const {gif, loading, fetchData} = useGif(tag);            //send a tag in useGif hook me


    return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }
   
   {/*if loading true then show Spinner if false(after gif image come from Api se) then show a gif image*/}
      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}       //jo v type karenge input tag me wo set krgea in useSTtae k tag state variable to update on ui
        value={tag} />
      

    {/*when u click on generate button fetchData function call(define in useGif hook me along with tag ki text value k sth.*/}
      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
       Generate </button>
    
    </div>
  )
}

export default Tag
