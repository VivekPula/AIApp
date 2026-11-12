import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
const getData = async (setData)=>{
  try{
    const res=await fetch('http://localhost:3000/api/hello');
    if(!res.ok)
        throw new Error("HTTP ERROR! Status : "+res.status);
    const data =await res.json();
    setData(data);
    console.log('Backend Data : ',data);
  }
  catch(error){
    console.log("Connection Failed : ",error);
  }
}
function App() {
  const [data, setData] = useState({});
  useEffect(()=>{getData(setData);},[]);
  return (
    <div>
      <h1>HELLO WORLD {data.message}</h1>
    </div>
  )
}

export default App
