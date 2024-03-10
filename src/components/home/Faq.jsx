'use client'
import { faq } from '../../data/index'
import { useState } from 'react';
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = index => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (<section className="mt-20 w-full flex flex-col justify-center items-center pb-4 px-4">
        <h1 className="font-bold sm:text-3xl text-[20px] overflow-hidden z-10">سوالات متداول</h1>
        <div className="lg:w-5/12 w-full flex flex-col mt-6 space-y-3 z-10 max-w-[1400px]">
            {faq.map((item, index) => (
                <div  onClick={() => handleItemClick(index)} key={index} className="w-full sm:text-base text-sm  flex  p-4 rounded-lg bg-white flex-col">
                    <div className="flex w-full justify-between cursor-pointer overflow-hidden">
                        <p>{item.question}</p>
                        <img src="/icons/down.svg" alt="icon" className={`${activeIndex === index ? `rotate-180 transition-all` : `transition-all`}`}/>
                    </div>
                    <div id="accordion-collapse-body-1" className={`${activeIndex === index ? `relative transition-all` : `hidden`}`} aria-labelledby="accordion-collapse-heading-1">
                        <div className="py-5">
                            <p className="mb-2 text-gray-500">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
        <div className="flex mt-10 z-10">
            <p className=' sm:text-base text-sm'>جواب سوال خودت رو پیدا نکردی؟</p>
            <p className="text-[#2486F9] mr-2 cursor-pointer sm:text-base text-sm">پشتیبانی و راهنمایی</p>
            <img src="/icons/circle.svg" alt="circle" className="w-4 mr-1" />
        </div>
        <div className="w-[150px] h-[500px] bg-[#4cd27f] absolute rounded-full blur-[200px]">
        </div>
    </section>);
}

export default Faq;