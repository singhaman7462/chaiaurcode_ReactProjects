import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then((response)=>{
    //         return response.json();
    //    }).then((response)=>{
    //        console.log(response);
    //        setData(response);
    //    })
    // },[]);

    // console.log(data);

  const data=useLoaderData();
  console.log(data);
  

  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>
        Github Followers : {data.followers}
        <img className='text-center' src={data.avatar_url} alt='Git Picture' width={300}></img>
    </div>
    
  )
}

const githubInfoLoader =async ()=>{
    const response=await fetch('https://api.github.com/users/singhaman7462');
    return response.json();
}
export {Github,githubInfoLoader};