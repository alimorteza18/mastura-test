import Image from "next/image";

const Gift = ({setModal}) => {
    return (<section className="w-full flex justify-center items-center mt-20 px-4">
        <div className="md:flex-row flex-col max-w-[1400px] xl:w-[70%] w-[100%] flex bg-[#3B9869] md:px-12 px-4  py-10 rounded-3xl md:space-x-20 space-x-0 md:space-x-reverse">
            <div className="flex flex-col md:w-1/3 w-full">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-1 space-x-reverse">
                        <div className="w-2 h-2 rounded-full bg-[#6BCB47]"></div>
                        <p className="text-white text-sm">نتایج زنده</p>
                    </div>
                    <p className="text-white text-[18px]">جدول امتیازات </p>
                </div>
                <div className="flex flex-col  mt-2 space-y-3">
                    <div className="p-3 bg-[#45A775] rounded-[10px] flex items-center justify-between">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <p className="text-white text-lg">۱</p>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Image src='/images/profile.svg' alt="avatar" width={40} height={40} quality={100} />
                                <p className="text-white">زهرا علیزاده</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <p className="text-[#6BCB47]">۶۳۴۰</p>
                            <Image src='/images/gem.svg' alt="gem" width={10} height={16} quality={100} />
                        </div>
                    </div>
                    {/* Fake Data */}
                    <div className="p-3 bg-[#45A775] rounded-[10px] flex items-center justify-between">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <p className="text-white text-lg">۲</p>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Image src='/images/profile.svg' alt="avatar" width={40} height={40} quality={100} />
                                <p className="text-white">زهرا علیزاده</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <p className="text-[#6BCB47]">۶۳۴۰</p>
                            <Image src='/images/gem.svg' alt="gem" width={10} height={16} quality={100} />
                        </div>
                    </div>
                    <div className="p-3 bg-[#45A775] rounded-[10px] flex items-center justify-between">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <p className="text-white text-lg">۳</p>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Image src='/images/profile.svg' alt="avatar" width={40} height={40} quality={100} />
                                <p className="text-white">زهرا علیزاده</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <p className="text-[#6BCB47]">۶۳۴۰</p>
                            <Image src='/images/gem.svg' alt="gem" width={10} height={16} quality={100} />
                        </div>
                    </div>
                    <div className="p-3 bg-[#45A775] rounded-[10px] flex items-center justify-between opacity-50">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <p className="text-white text-lg">۴</p>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Image src='/images/profile.svg' alt="avatar" width={40} height={40} quality={100} />
                                <p className="text-white">زهرا علیزاده</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <p className="text-[#6BCB47]">۶۳۴۰</p>
                            <Image src='/images/gem.svg' alt="gem" width={10} height={16} quality={100} />
                        </div>
                    </div>
                    {/* Fake Data */}
                </div>
            </div>
            <div className="gift-background md:mt-0 mt-10 flex md:w-auto w-full items-center p-6 rounded-[20px]">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl overflow-hidden md:flex hidden font-bold">جوایز ویژه ماه مبارک رمضان</h1>
                    <h1 className="text-white text-2xl overflow-hidden md:hidden flex font-bold">جوایز ویژه ماه</h1>
                    <h1 className="text-white text-2xl overflow-hidden md:hidden flex font-bold">مبارک رمضان</h1>
                    <div className="flex flex-col mt-6 space-y-2">
                        <div className="flex items-center space-x-1 space-x-reverse">
                            <img src="/icons/checked.svg" />
                            <p className="text-white">114 کمک‌ هزینه سفر زیارتی</p>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                            <img src="/icons/checked.svg" />
                            <p className="text-white">114 لپ‌تاپ و دوربین عکاسی </p>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                            <img src="/icons/checked.svg" />
                            <p className="text-white">114 تلفن همراه و تبلت</p>
                        </div>
                        {/* <div className="flex items-center space-x-1 space-x-reverse">
                            <img src="/icons/checked.svg" />
                            <p className="text-white">و هزاران جوائز نقدی و غیر نقدی</p>
                        </div> */}
                    </div>
                    <div className="md:flex hidden">
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-white text-[18px] mt-5 overflow-hidden font-bold">تو مسیر مسطورا، کلی جایزه‌ در انتظارته</h1>
                            <button onClick={()=>setModal(true)} className="py-4 bg-[#D2BE8F] rounded-2xl">
                                <p className="text-white font-bold">همین الان شروع کن</p>
                            </button>
                        </div>
                        <img className="mr-2 mt-4" src="/images/vector.svg" alt="vector" />

                    </div>
                </div>
                <Image src='/images/quran.svg' alt="quran" width={180} height={220} quality={100} className="md:flex hidden" />
                <Image src='/images/quran.svg' alt="quran" width={110} height={160} quality={100} className="md:hidden flex absolute left-10 -mt-16" />

            </div>
            <div className="flex md:hidden w-full">
                <div className="flex w-full flex-col space-y-8 justify-center items-center">
                    <h1 className="text-white mt-5 overflow-hidden text-center text-[18px] font-bold">تو مسیر مسطورا، کلی جایزه‌ در انتظارته</h1>
                    <button onClick={()=>setModal(true)} className="py-4  bg-[#D2BE8F] rounded-2xl w-full">
                        <p className="text-white font-bold ">همین الان شروع کن</p>
                    </button>
                </div>
                <img className="left-5 mt-7 absolute w-[2rem] sm:w-6" src="/images/arrow-vector.svg" alt="vector" />

            </div>
        </div>
    </section>);
}

export default Gift;