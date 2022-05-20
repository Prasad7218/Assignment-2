import React, { useState } from 'react'

const Home = () => {
    const[error,setError]=useState('');
    const[result,setResult]=useState(0);

    const changeHandler=(event)=>{
        const entry=event.target.value;
        if(entry<0){
            setError('value must be greater than 0')
        }else{
            setError('')
        }
        let add=0;
        for(var i=0;i<entry;i++){
            add=add+i;
        }
        setResult(add);

    }


    const clickHandler=()=>{
    //  setResult(add);
    }


  return (
    <>
    <input style={{marginTop:'150px'}} onChange={changeHandler} type='number'/><br/>

    <span style={{color:'red'}}>{error}</span>

    <label><h1>Sum - {result}</h1></label><br/>

    <button onClick={clickHandler}>Sum</button>
    </>
  )
}

export default Home;