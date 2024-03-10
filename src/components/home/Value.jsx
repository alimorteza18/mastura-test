const Value = () => {
    return (
        <div className=" flex w-full flex-col items-center justify-center bg-[#3B9869] mt-20 rounded-2xl">
            <div className="md:flex hidden items-center justify-center flex-col mt-10">

                <img src="/images/stars.svg" alt="stars" />
                <h1 className="text-white text-3xl  overflow-hidden mt-4 font-bold">ارزش های مسطورا</h1>
            </div>
            {/* mobile */}
            <div className="md:hidden flex items-center justify-between w-full px-4 mt-5">

                <h1 className="text-white text-[20px] overflow-hidden font-bold">ارزش های مسطورا</h1>
                <img src="/images/stars.svg" alt="stars" />
            </div>
            {/* mobile */}
            <section className="w-full releative overflow-auto bg-[#3B9869] flex flex-col justify-center items-start md:items-center  pb-20 ">
                <div className="flex justify-center items-center mt-8 space-x-3 space-x-reverse w-[970px]">
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523] font-bold">آشنایی با آیات منتخب</p>
                        <p className="text-white mt-5">کاربردی‌ترین آیات قرآن کریم برای زندگی امروزه را در مسیری بازی‌وارسازی‌شده پیش روی شما گذاشته‌ایم</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523] font-bold">حفظ آیات در سه دقیقه</p>
                        <p className="text-white mt-5">با استفاده از آموزش‌های تصویری اساتید باتجربه، حفظ هر کدام از آیات منتخب تنها در سه دقیقه را ممکن کرده‌ایم</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523] font-bold">تجربه زندگی با آیه‌ها</p>
                        <p className="text-white mt-5">با تسهیل مشاهده و انتشار تجربه‌های شما، فرصت تجربه زندگی با آیه‌ها را برای تمام مخاطبان فراهم کرده‌ایم</p>
                    </div>
                    <div className="flex h-[245px] w-[238px] flex-col items-center bg-[#308B5D] text-center px-5 rounded-[20px]">
                        <img src="/images/star.svg" alt="star" className="w-5 h-5 mt-5" />
                        <p className="text-[#F2B523] font-bold">افزایش حس معنوی</p>
                        <p className="text-white mt-5">با ایجاد شبکه اجتماعی قرآنی و گره‌زدن ساعت‌های شبانه‌روز شما با قرآن، زمینه‌ساز افزایش حس معنوی شما شده‌ایم</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Value;