'use client'
import {  useRouter } from "next/navigation";
import { useEffect } from "react";

const Guard = ({children}) => {
      const router = useRouter()
     
     

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const userToken = localStorage.getItem('token')
            if(!userToken || userToken?.length<10){
                router.push('/')
            }
        }
    },[router])
 
    return (<>{children}</>);
}
 
export default Guard;