"use client"


import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { URL, confirmCode, login } from "@/services/contactService";
import { useRouter } from "next/navigation";
import axios from "axios";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
const Login = ({modal, setModal}) => {
    const [mobile, setMobile] = useState("");
    const [activeCode, setActiveCode] = useState("");
    const [getCodeLoading,setGetCodeLoading] = useState(false)
    const [step,setStep] = useState(1)
    const router = useRouter();






    

    const handleLoginSubmit =  () => {
        setGetCodeLoading(true)
        if(mobile.length<11){
            message.error('طول شماره همراه باید 11 رقم باشد.')
            setGetCodeLoading(false)
          } else {            
            
            axios.post(`${URL}/Authentications/Login`,{
                mobile:mobile,
            }).then(({data})=>{
                message.success('کد تایید برای شما پیامک شد.')
                console.log(data,'data')
                setStep(2)
                setGetCodeLoading(false)
            }).catch(({err})=>{
                setGetCodeLoading(false)
                if(err?.response?.data){
                    console.log(err,'err')
                    setGetCodeLoading(false)
                    message.error(err?.response?.data?.message)
                }
                
            })
          }

        // try {
        //     const user = {mobile}
        //     const { status, data } = await login(user);
        //     setGetCodeLoading(false)
        //     if (status === 200) {
        //         setMobileStatus(status);
                
        //     }
        // } catch (err) {
        //     setGetCodeLoading(false)
        //     if(err?.response?.data?.message){
        //         message.error(err?.response?.data?.message)
        //     }
            
        }
    

    const handleActiveCode = () => {
        setGetCodeLoading(true)
        if(activeCode.length===5){
            axios.post(`${URL}/Authentications/ConfirmLogin`,{
                mobile:mobile,
                activeCode:activeCode,
            }).then(({data})=>{
                console.log(data?.data,'data?.data')
                localStorage.setItem("token", data.data)
                setGetCodeLoading(false)
                axios.defaults.headers["Authorization"]='Bearer ' + data.data;
            }).catch(({err})=>{
                setGetCodeLoading(false)
                if(err?.response?.data){
                    console.log(err,'err')
                    setGetCodeLoading(false)
                    message.error(err?.response?.data?.message)
                }
            }).finally(()=>{
                router.push('/profile')
            })
        }else {
            message.error('کد تایید باید 5 رقم باشد.')
            setGetCodeLoading(false)
        }
       

        // try {
        //     const code = {mobile,activeCode}
        //     console.log(activeCode,'activeCode')
        //     if(activeCode.length===5){
        //     const { status, data } = await confirmCode(code);
        //     setGetCodeLoading(false)
        //     if (status === 200) {
                
        //     }
        // } else {
            
        // }
        // } catch (err) {
        //     if(err?.response?.data?.message){
        //         message.error(err?.response?.data?.message)
        //     }
        //     setGetCodeLoading(false)

        // }
    }
    return (

        <section id="authentication-modal" aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen h-screen md:inset-0 bg-gray-950 bg-opacity-50 ${modal === true ? 'flex' : 'hidden'}`}>
            {step === 1 ? <Step1 handleLoginSubmit={handleLoginSubmit}getCodeLoading={getCodeLoading} mobile={mobile} setMobile={setMobile} modal={modal}  setModal={setModal} /> : <Step2 mobile={mobile} setStep={setStep} handleActiveCode={handleActiveCode} getCodeLoading={getCodeLoading} activeCode={activeCode} setActiveCode={setActiveCode} modal={modal} setModal={setModal}  />}
        </section>
    );
}

export default Login;