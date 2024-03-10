"use client"
import { useEffect, useState } from "react";
import { mobileSideBar, sideBar } from "../../data/index";
import { GetRoad, URL, getuserData } from "@/services/contactService";
import axios from "axios";
import Link from "next/link";

const Profile = () => {
   const [ayatEveryDay, setAyatEveryDay] = useState([]);
   const [ayatIndicator, setAyatIndicator] = useState([]);
   const [ayatSupplement, setAyatSupplement] = useState([]);
   const [ayeEveryDayOpen, setAyeEveryDayOpen] = useState(false);
   const [ayeIndicatoOpen, setAyeIndicatOpen] = useState(false);
   const [ayeSupplementOpen, setAyeSupplementOpen] = useState(false);
  const [userData,setUserData] = useState(null)
   useEffect(() => {
      const getData = async () => {
         const ayatEveryDay = await GetRoad();
         setAyatEveryDay(ayatEveryDay?.data.data.ayatEveryDay);
         setAyatIndicator(ayatEveryDay?.data.data.ayatIndicator);
         setAyatSupplement(ayatEveryDay?.data.data.ayatSupplement);
      };
      getData();




      // get user data
      const url = `${URL}/Users/GetMenuUserInfo`;
     axios.get(url).then(({data})=>{
        console.log(data,'data user')
        setUserData(data?.data)
    }).catch(({err})=>{
      console.log(err,'err')
    })
      


   }, []);



   // just for debug 
   useEffect(()=>{
      console.log(userData,'userData')
   },[userData])





   return (<main className="flex w-full">
      {/* ayatIndicator */}
      {/* ayatSupplement */}
      {/* ayatEveryDay */}

      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
         <span className="sr-only">Open sidebar</span>
         <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
         </svg>
      </button> */}

      <aside id="default-sidebar" className="fixed top-0 right-0 border-l-2 z-40 w-64 h-screen transition-transform translate-x-full md:translate-x-0" aria-label="Sidebar">
         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <div className="w-full flex mt-10 justify-between items-center px-4">
               <img src="/images/mastura-logo.svg" alt="mastura-logo" />
               <img className="cursor-pointer" src="/icons/ring.svg" alt="ring" />
            </div>
            <div className="mt-5 flex flex-col border rounded-[20px] p-5 space-y-5">
               <div className="flex items-center">
                  <img src="/images/user-profile.svg" alt="user-profile" />
                  <div className="mr-2">
                     <p>{userData?.name || 'بدون نام'}</p>
                     <p className="text-[13px] text-[#2486F9]">صفحه من</p>
                  </div>
               </div>
               <div className="flex flex-col justify-start items-start">
                  {/* <div className="flex items-center">
                     <p className="text-[#46AE41]">۳۴</p>
                     <img src="/icons/aye.svg" alt="aye" className="mr-1" />
                  </div> */}
                  <div className="text-gray-400">
                     امتیاز کل
                  </div>
                  <div className="flex items-center">
                     <img src="/icons/gem.svg" alt="aye" className="mr-1 mb-2 overflow-hidden" />
                     <p className="text-[#46AE41] text-2xl overflow-hidden">{userData?.score}</p>

                  </div>
               </div>
               <div className="w-full flex flex-col justify-start items-center">

                     <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                           <div className="text-gray-400">رتبه جدول</div>
                           <div>{userData?.completeProfilePercentage}</div>
                        </div>
                        <div className="flex flex-col">
                           <div className="text-gray-400">تعداد محتوا</div>
                           <div>{userData?.contentNumber}</div>
                        </div>
                     </div>
                     <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                           <div className="text-gray-400">لایک</div>
                           <div>{userData?.likeNumber}</div>
                        </div>
                        <div className="flex flex-col">
                           <div className="text-gray-400">بازدید محتوا</div>
                           <div>{userData?.viewNumber}</div>
                        </div>
                     </div>


               </div>
            </div>
            <ul className="space-y-2 font-medium mt-8">
               {sideBar.map((item, index) => (
                  <li key={index}>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-[#3B9869]  hover:bg-[#EDF7EC]  group">
                        <img className="w-5 h-5 transition duration-75" src={item.imgUrl} alt="icon" />
                        <span className="ms-3">{item.title}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </aside>


      <div className="md:p-14 p-4  md:mr-64 w-full">
         <div className="md:hidden flex w-full justify-between items-center">
            <img className="cursor-pointer" src="/icons/ring.svg" alt="ring" />
            <div className="flex space-x-3 space-x-reverse">
               <div className="flex items-center">
                  <p className="text-[#46AE41]">۳۴</p>
                  <img src="/icons/aye.svg" alt="aye" className="mr-1" />
               </div>
               <div className="flex items-center">
                  <p className="text-[#46AE41]">۶۳۴</p>
                  <img src="/icons/gem.svg" alt="aye" className="mr-1 mb-2" />
               </div>
            </div>
         </div>
         <div className="w-full py-6 md:px-6 px-4 pr-gradient rounded-[20px] flex flex-col md:mt-0 mt-8">
            {/* <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" /> */}
            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     آیه روز
                  </h1>
                  <p className="text-white font-light md:text-base text-[13px] ">روز چهارم ماه مبارک رمضان</p>
               </div>
               <div className="flex items-center space-x-1 space-x-reverse">

                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۰۵</p>
                  </div>
                  <span className="text-white">
                     :
                  </span>
                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۳۴</p>
                  </div>
                  <span className="text-white">
                     :
                  </span>
                  <div className=" glass w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                     <p className="text-white">۲۲</p>
                  </div>
               </div>
            </div>
            <div className="w-full md:py-4 py-2 bg-white-glass rounded-lg mt-8 flex px-4 items-center justify-between">
               <div className="flex items-center">
                  <img src="/icons/glass-aye.svg" alt="aye" />
                  <div>
                     <p className="text-white md:text-base text-[12px]">زندگی با هدف</p>
                     <p className="text-[12px] text-white font-extralight">اسراء | آیه ۹</p>
                  </div>
               </div>
               <div className="flex space-x-4 space-x-reverse">
                  <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                     <p className="text-[#46AE41] text-[12px]">۶۳۴</p>
                     <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                  </div>
                  <img src="/icons/vector-f.svg" alt="" />
               </div>
            </div>
         </div>
         <p className="text-2xl font-bold mt-10 overflow-hidden">مسیر مسابقه</p>
         <div className="w-full py-6 md:px-6 px-4 gr-gradient rounded-[20px] flex flex-col mt-10">
            {/* <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" /> */}

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     آیات شاخص رمضان
                  </h1>
                  <p className="text-white font-light md:text-base text-[13px] w-[80%]">این ۲ آیه محور محتوایی فعالیت‌های قرآنی امسال و حرکت هم‌افزا هستند.</p>
               </div>
               <div className="flex flex-col justify-center items-center w-auto">
                  <div onClick={() => setAyeEveryDayOpen(!ayeEveryDayOpen)} className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img className={`${ayeEveryDayOpen === true ? `rotate-180 transition-all` : `transition-all`}`} src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2 z-10 text-[12px]">۰/{ayatEveryDay.length}</p>
               </div>
            </div>
            {ayatEveryDay.map((item, index) => (
               <div key={index} className={`w-full md:py-4 py-2 bg-white-glass rounded-lg mt-8  px-4 items-center justify-between ${ayeEveryDayOpen === false ? 'hidden' : 'flex'}`}>
                  <div className="flex items-center">
                     <img src="/icons/glass-aye.svg" alt="aye" />
                     <div>
                        <p className="text-white md:text-base text-[12px]">{item.title}</p>
                        <p className="text-[12px] text-white font-extralight">{item.sureh} | آیه {item.ayeNumber}</p>
                     </div>
                  </div>
                  <Link href={`/profile/${item.id}`} className="flex space-x-4 space-x-reverse">
                     <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">{item.allScore}</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                     </div>
                     <img src="/icons/vector-f.svg" alt="" />
                  </Link>
               </div>

            ))}
         </div>
         <div className="w-full py-6 md:px-6 px-4 br-gradient rounded-[20px] flex flex-col mt-5">
            {/* <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" /> */}

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     هر روز، یک آیه
                  </h1>
                  <p className="text-white font-light md:text-base text-[13px] w-[80%]">این ۳۰ آیه برای ۳۰ روز رمضان، بر اساس کتاب طرح کلی انتخاب شده‌اند</p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div onClick={() => setAyeIndicatOpen(!ayeIndicatoOpen)} className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img className={`${ayeIndicatoOpen === true ? `rotate-180 transition-all` : `transition-all`}`} src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2 text-[12px]">۰/{ayatIndicator.length}</p>
               </div>
            </div>
            {ayatIndicator.map((item, index) => (
               <div key={index} className={`w-full md:py-4 py-2 bg-white-glass rounded-lg mt-8  px-4 items-center justify-between ${ayeIndicatoOpen === false ? 'hidden' : 'flex'}`}>
                  <div className="flex items-center">
                     <img src="/icons/glass-aye.svg" alt="aye" />
                     <div>
                        <p className="text-white md:text-base text-[12px]">{item.title}</p>
                        <p className="text-[12px] text-white font-extralight">{item.sureh} | آیه {item.ayeNumber}</p>
                     </div>
                  </div>
                  <Link href={`/profile/${item.id}`} className="flex space-x-4 space-x-reverse">
                     <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">{item.allScore}</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                     </div>
                     <img src="/icons/vector-f.svg" alt="" />
                  </Link>
               </div>

            ))}
         </div>
         <div className="w-full py-6 px-6 db-gradient rounded-[20px] flex flex-col mt-5">
            {/* <img src="/icons/stars.svg" alt="" className="w-[214px] h-[112px] absolute left-36" /> */}

            <div className="flex w-full justify-between items-center">
               <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                     آیات مکمل رمضان
                  </h1>
                  <p className="text-white font-light w-[80%] md:text-base text-[13px]">این ۱۸ آیه، آیات مکمل متناسب با محور محتوایی رمضان هستند</p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div onClick={() => setAyeSupplementOpen(!ayeSupplementOpen)} className="glass w-[31px] h-[31px] rounded-full flex justify-center items-center cursor-pointer">
                     <img className={`${ayeSupplementOpen === true ? `rotate-180 transition-all` : `transition-all`}`} src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <p className="text-white mt-2 text-[12px]">۰/{ayatSupplement.length}</p>
               </div>
            </div>
            {ayatSupplement.map((item, index) => (
               <div key={index} className={`w-full md:py-4 py-2 bg-white-glass rounded-lg mt-8  px-4 items-center justify-between ${ayeSupplementOpen === false ? 'hidden' : 'flex'}`}>
                  <div className="flex items-center">
                     <img src="/icons/glass-aye.svg" alt="aye" />
                     <div>
                        <p className="text-white md:text-base text-[12px]">{item.title}</p>
                        <p className="text-[12px] text-white font-extralight">{item.sureh} | آیه {item.ayeNumber}</p>
                     </div>
                  </div>
                  <Link href={`/profile/${item.id}`} className="flex space-x-4 space-x-reverse">
                     <div className="flex justify-center items-center w-[50px] h-[26px] bg-white rounded-[50px]">
                        <p className="text-[#46AE41] text-[12px]">{item.allScore}</p>
                        <img src="/icons/gem.svg" alt="aye" className="w-[10px] h-4 mb-1 mr-1" />
                     </div>
                     <img src="/icons/vector-f.svg" alt="" />
                  </Link>
               </div>

            ))}
         </div>
      </div>
         <div className="md:hidden flex w-full justify-between items-center bottom-7 bg-white py-6 border fixed z-50 px-4">
               {mobileSideBar.map((item, index) => (         
                     <a href="#" className="flex items-center text-gray-900 hover:text-[#3B9869]  group overflow-hidden">
                        <img className="w-4 h-4 transition duration-75" src={item.imgUrl} alt="icon" />
                        <span className="text-xs overflow-hidden mr-1">{item.title}</span>
                     </a>
               ))}
         <img src="/images/user-profile.svg" alt="user-profile" className="w-8 h-8" />
         </div>

   </main>);
}

export default Profile