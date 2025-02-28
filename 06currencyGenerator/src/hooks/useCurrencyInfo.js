import { useState,useEffect } from "react";

let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
       fetch(`${url}${currency}.json`)
       .then((res)=>{
        return res.json();
       }).then((res)=>{
            setData(res[currency]);
       })
    },[currency]);
    console.log(data);
    return data;   
}

export default useCurrencyInfo;