import Image from "next/image";

const Activity = () => {
    return (<>
        <section className="w-full md:flex hidden  md:space-x-6 space-x-0 md:space-y-0 space-y-5 md:space-x-reverse justify-center items-center mt-20 pb-8 z-10 md:px-0 px-4 md:flex-row flex-col">

            <div className="md:w-[340px] w-full h-36 justify-center bg-[#4BC286] rounded-[20px] flex items-center space-x-8 space-x-reverse ">
                <div className="flex flex-col">
                    <p className="text-[20px] text-white font-bold">700</p>
                    <p className="text-white">محتوا تولید شده</p>
                </div>
                <Image src='/images/media.svg'
                    alt="media image"
                    height={140}
                    width={138}
                    quality={100} />
            </div>
            <div className=" md:w-[340px] w-full h-36 justify-center bg-[#3B9869] rounded-[20px] flex items-center space-x-8 space-x-reverse">
                <div className="flex flex-col">
                    <p className="text-[20px] text-white font-bold">3000</p>
                    <p className="text-white">محتوا دیده  شده</p>
                </div>
                <Image src='/images/media-1.svg'
                    alt="media image"
                    height={130}
                    width={107}
                    quality={100} />
            </div>
            <div className=" h-36 md:w-[340px] w-full bg-[#4BC286] rounded-[20px] flex items-center justify-center space-x-8 space-x-reverse">
                <div className="flex flex-col">
                    <p className="text-[20px] text-white font-bold">313</p>
                    <p className="text-white">عضو در مسطورا</p>
                </div>
                <Image src='/images/users.svg'
                    alt="media image"
                    height={140}
                    width={138}
                    quality={100} />
            </div>
        </section>
        {/* Mobile */}
        <section className="w-full md:hidden flex justify-between items-center mt-20 pb-8 z-10 px-4">

            <div className="w-[45%]  h-[278px] flex flex-col bg-[#4BC286] rounded-[20px] items-center justify-center pb-8 py-8">
                <Image src='/images/media.svg'
                    alt="media image"
                    height={110}
                    width={108}
                    quality={100}
                  />
                <div className="flex flex-col mt-10">
                    <p className="text-[18px] text-white text-center font-bold">700</p>
                    <p className="text-white text-center text-[13px]">محتوا تولید شده</p>
                </div>
            </div>
            <div className="flex flex-col space-y-2 w-[48%]">
                <div className="  w-full h-[108px] justify-evenly bg-[#3B9869] rounded-[20px] flex items-center ">
                    <div className="flex flex-col">
                        <p className="text-[13px] text-white font-bold">3000</p>
                        <p className="text-white text-[13px]">محتوا دیده  شده</p>
                    </div>
                    <Image src='/images/media-1.svg'
                        alt="media image"
                        height={70}
                        width={60}
                        quality={100} />
                </div>
                <div className=" h-[161px] w-full bg-[#4BC286] rounded-[20px] flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-center">
                        <p className="text-white font-bold">313</p>
                        <p className="text-white text-[13px]">عضو در مسطورا</p>
                    </div>
                    <Image src='/images/users.svg'
                        alt="media image"
                        height={140}
                        width={130}
                        quality={100} 
                        className=" mt-5"
                        />
                </div>

            </div>
        </section>
        {/* Mobile */}
    </>
    );


}

export default Activity