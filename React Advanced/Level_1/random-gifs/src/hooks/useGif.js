import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//useGif hook create
const useGif = (tag) => {
    const [gif, setGif] = useState('');                        //At starting gif will empty
    const [loading, setLoading] = useState('false');

  
    async function fetchData(tag) {
      setLoading(true);
      
      //Api call BY axios.get
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);     //if tag is true then tag url call otherwise random url call and ur k under wala value pick
      const imageSource = data.data.images.downsized_large.url;            //random url wala image get (explain in copy)
      setGif(imageSource);                                              //gif image wch store in imageSource after api call, set into gif state variable me loc12
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('car');
    },[] )   //one times call so square barcket given

      //hook return whatever u used: its return gif, loading, fetchData function.
    return {gif,loading, fetchData};
}

export default useGif
