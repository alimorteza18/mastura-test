"use client"
import { getSingleRoad } from "@/services/contactService";
import { useEffect, useState } from "react";

const SingleAyeh = ({ params }) => {
    const [singleRoad, setSingleRoad] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const singleRoad = await getSingleRoad(params.id);
            setSingleRoad(singleRoad.data.data)
        };
        getData();
    }, []);


    // console.log(singleRoad, "DATA")
    return (<main id="bg-gradient" className="w-full h-full min-h-screen flex flex-col sm:px-96 px-4 py-24">
        <img src="/images/bg-star.svg" alt="" className="absolute top-0 right-1/3 md:w-auto md:h-auto w-44 h-48" />
        <img src="/images/bsmlh.svg" alt="" className="w-40 h-10" />
        <p className="text-white md:text-2xl text-lg overflow-hidden mt-6 quran-taha ">{singleRoad.arabic}</p>
        <div className="w-full flex mt-6 justify-between">
            <p className="text-white w-[60%]">{singleRoad.persian}</p>
            <div className="glass md:w-[120px] w-[100px]  h-[50px] rounded-[10px] flex items-center justify-center space-x-2 space-x-reverse cursor-pointer">
                <img src="/icons/vector-quran.svg" alt="icon" className="w-[20px] h-[20px] md:w-auto md:h-auto" />
                <p className="text-white md:text-sm text-xs overflow-hidden">تصویر آیه</p>
            </div>
        </div>
        <div className="w-full md:px-10 px-0 mt-20 space-y-4">
            <div className="w-full px-4 py-6 bg-gray flex rounded-[15px] justify-between">
                <div className="flex space-x-1 space-x-reverse ">
                    <img src="/icons/bok.svg" alt="" />
                    <p>خوانش</p>
                </div>
                <div className="flex space-x-4 space-x-reverse items-center">
                    <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">66</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                    </div>
                    <img src="/icons/v-b.svg" alt="" className="w-3 h-3" />
                </div>
            </div>
            <div className="w-full px-4 py-6 bg-gray flex rounded-[15px] justify-between">
                <div className="flex space-x-1 space-x-reverse ">
                    <img src="/icons/tabin.svg" alt="" />
                    <p>تبیین</p>
                </div>
                <div className="flex space-x-4 space-x-reverse items-center">
                    <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">66</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                    </div>
                    <img src="/icons/v-b.svg" alt="" className="w-3 h-3" />
                </div>
            </div>
            <div className="w-full px-4 py-6 bg-gray flex rounded-[15px] justify-between">
                <div className="flex space-x-1 space-x-reverse ">
                    <img src="/icons/union.svg" alt="" />
                    <p>حفظ</p>
                </div>
                <div className="flex space-x-4 space-x-reverse items-center">
                    <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">66</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                    </div>
                    <img src="/icons/v-b.svg" alt="" className="w-3 h-3" />
                </div>
            </div>
            <div className="w-full px-4 py-6 bg-gray flex rounded-[15px] justify-between">
                <div className="flex space-x-1 space-x-reverse ">
                    <img src="/icons/tak-azmon.svg" alt="" />
                    <p>آزمون</p>
                </div>
                <div className="flex space-x-4 space-x-reverse items-center">
                    <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">66</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                    </div>
                    <img src="/icons/v-b.svg" alt="" className="w-3 h-3" />
                </div>
            </div>
            <div className="w-full px-4 py-6 bg-gray flex rounded-[15px] justify-between">
                <div className="flex space-x-1 space-x-reverse ">
                    <img src="/icons/upload-tak.svg" alt="" />
                    <p>بارگذاری کنش</p>
                </div>
                <div className="flex space-x-4 space-x-reverse items-center">
                    <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">66</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                    </div>
                    <img src="/icons/v-b.svg" alt="" className="w-3 h-3" />
                </div>
            </div>



        </div>


    </main>);
}

export default SingleAyeh;