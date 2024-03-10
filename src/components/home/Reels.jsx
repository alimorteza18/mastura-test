'use client'

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";

const Reels = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [modal2IsOpen,setModal2IsOpen] = useState(false)
    const [modal3IsOpen,setModal3IsOpen] = useState(false)

    return (
    <>
    <section className="w-full flex justify-center items-center z-10 mt-20 px-4">
        <div className="xl:w-[70%] w-[100%] flex md:bg-white bg-transparent flex-col md:p-5 p-0 rounded-3xl max-w-[1400px]">
            <div className="flex w-full space-x-3 space-x-reverse md:px-0 px-4">
                <Image src='/icons/reels-icon.svg'
                    alt="vide-icon"
                    width={22}
                    height={22}
                    quality={100} />
                <h1 className="text-xl font-bold z-10">محتوای کاربران مسطورا</h1>
            </div>
            <div className="w-full flex mt-6 md:justify-between justify-center">
                <Image onClick={()=>setModalIsOpen(true)}  className="cursor-pointer"
                    src='/images/video1.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />
                        <Image onClick={()=>setModal2IsOpen(true)}  className="cursor-pointer md:block hidden"
                    src='/images/video.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />

                        <Image onClick={()=>setModal3IsOpen(true)} className="cursor-pointer md:block hidden"
                    src='/images/video1.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />
 
                    
                
            </div>
        </div>
    </section>
    
    <Modal footer={null} header={null} open={modalIsOpen} onCancel={()=>setModalIsOpen(false)} >
        <video controls >
            <source src="/videos/1.mp4" />
        </video>
    </Modal>
    <Modal footer={null} header={null} open={modal2IsOpen} onCancel={()=>setModal2IsOpen(false)} >
        <video controls >
            <source src="/videos/2.mp4" />
        </video>
    </Modal>
    <Modal footer={null} header={null} open={modal3IsOpen} onCancel={()=>setModal3IsOpen(false)} >
        <video controls >
            <source src="/videos/3.mp4" />
        </video>
    </Modal>
    
    </>);
}

export default Reels;