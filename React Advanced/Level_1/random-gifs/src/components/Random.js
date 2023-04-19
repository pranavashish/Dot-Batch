import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//get Api key from .env file se
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

//we get a Gif ,loading , fetchData function from useGif hook To use 
  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)        //at gif state variable me image store
    }

  {/*if loading true then show Spinner if false(after gif image come from Api se) then show a gif image*/}

      <button onClick={() => fetchData()}             //fetchData function call by onclick pe
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
