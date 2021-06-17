import React,{useEffect,useState} from 'react';


const Convert = ({language,text}) => {
    useEffect(()=>{
        console.log('new language text')
    },[language,text])
    return (
        <div></div>
    )
}

export default Convert;