import Link from "next/link";

const Footer = () => {
    return (<section className="bg-[#F5F1E4] w-full pt-20 pb-10">
        <div className="flex w-full lg:space-x-40 space-x-0 lg:space-x-reverse lg:px-28 px-4 lg:flex-row flex-col">
            <div>
                <img src="/images/mastura-logo.svg" alt="mastura-logo" />
                <p className=" sm:text-base text-sm mt-4 text-[#2A2B2D] overflow-hidden">
                    مسطورا، پلتفرمی است که با تمرکز بر آموزش قرآن و ارزش‌های
                    <br />
                    اسلامی، به ترویج دانش و آگاهی در جامعه می‌پردازد. ما به ارائه
                    <br />
                    محتوایی متنوع و جذاب با استفاده از فناوری‌های نوین متعهدیم
                    <br />
                    تا افراد را به سمت یادگیری و بهبود معنویت خود هدایت کنیم.
                </p>
                <button className="bg-[#3B9869] p-2 rounded-[10px] mt-4">
                    <p className="text-white">درباه مسطورا بیشتر بدانید</p>
                </button>
            </div>
            {/* mobile */}
            <div className="lg:hidden flex justify-between mt-4 items-center">
                <div className="space-y-3 pt-4 text-sm">
                    <p>دسترسی ها</p>
                    <p className="text-[#959596]">درباره ما</p>
                    <p className="text-[#959596]">بلاگ</p>
                    <p className="text-[#959596]">تماس با ما</p>
                    <p className="text-[#959596]">فرصت های شغلی</p>
                </div>
                <div className="space-y-3 pt-4 text-sm">
                    <p>قوانین و مقررات</p>
                    <p className="text-[#959596]">سیاست حفظ حریم خصوصی</p>
                    <p className="text-[#959596]">سوالات متداول</p>
                    <p className="text-[#959596]"> قوانین و مقررات </p>
                </div>
            </div>
            {/* mobile */}
            <div className="space-y-3 pt-4 lg:block hidden">
                <p>دسترسی ها</p>
                <p className="text-[#959596]">درباره ما</p>
                <p className="text-[#959596]">بلاگ</p>
                <p className="text-[#959596]">تماس با ما</p>
                <p className="text-[#959596]">فرصت های شغلی</p>
            </div>
            <div className="space-y-3 pt-4 lg:block hidden">
                <p>قوانین و مقررات</p>
                <p className="text-[#959596]">سیاست حفظ حریم خصوصی</p>
                <p className="text-[#959596]">سوالات متداول</p>
                <p className="text-[#959596]"> قوانین و مقررات </p>
            </div>

        </div>
        <div className="flex w-full lg:space-x-40 lg:space-x-reverse space-x-0 lg:flex-row flex-col lg:px-28 px-4 mt-10">
            <div className="flex bg-[#EFEADA] p-4 rounded-[20px] justify-between lg:w-96 w-full">
                <div className="sm:text-base text-sm">
                    <p className="text-[#959596]">آدرس</p>
                    <p> تهران، خیابان حافظ، پائین‌تر از خیابان <br /> طالقانی، خیابان رشت، پلاک ۳۹</p>
                    <div className="flex mt-4 space-x-3 space-x-reverse">
                        <div>
                            <p className="text-[#959596]">تلفن تماس</p>
                            <p className="text-[14px]">۰۲۱ - ۶۶۹۵۶۱۱۰</p>
                        </div>
                        <div>
                            <p className="text-[#959596]">پست الکترونیک</p>
                            <p className="text-[14px]">info@mastoura.ir</p>
                        </div>
                    </div>
                    {/* <button className="bg-[#3B9869] flex justify-between p-3 space-x-4 space-x-reverse items-center rounded-[10px] mt-4">
                        <p className="text-white">مسیریابی از روی نقشه</p>
                        <img src="/icons/gomap.svg" alt="map" />
                    </button> */}
                </div>
                {/* <img src="/images/sazman.svg" alt="sazman qoran" /> */}
            </div>
            <p className="lg:hidden flex mt-10">ما را در شبکه های اجتماعی دنبال کنید</p>
            <div className="lg:w-[331px] w-full relative overflow-x-auto">
                <p className="lg:flex hidden">ما را در شبکه های اجتماعی دنبال کنید</p>
                <div className="flex lg:flex-wrap flex-nowrap space-x-2 space-x-reverse mt-5 space-y-3 space-y-reverse lg:w-auto w-[650px]">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg">
                      <Link href={'https://rubika.ir/masturaa'}>
                        <img src="/images/rubika.svg" alt="rubika" />
                        </Link>
                    </div>
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg">
                        <Link href={'https://eitaa.com/masturaa'}>
                        <img src="/images/eita.svg" alt="eita" />
                        </Link>
                    </div>
                 
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg">
                       <Link href={'https://shad.ir/masturaa'}>
                        <img src="/images/shad.svg" alt="shad" />
                        </Link>
                    </div>
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg">
                      <Link href={'https://ble.ir/masturaa'}>
                        <img src="/images/bale.svg" alt="bale" />
                        </Link>
                    </div>
                    
                
                  


                </div>
            </div>
            <div className="flex items-center lg:-mt-10 mt-4 space-x-3 space-x-reverse">
                <img src="/images/enemad.svg" alt="enemad" />
                <img src="/images/Anjoman.svg" alt="enemad" />
            </div>
        </div>
        <div className="mt-20 sm:text-base text-sm  flex lg:justify-between overflow-hidden justify-center lg:flex-row flex-col px-20 border-t-2 pt-10 w-full text-center">
            <p className="overflow-hidden">   طراحی و توسعه توسط <span className="text-[#2486F9] ">  خانواده عقیق </span></p>
            <p className="text-[#959596] overflow-hidden">تمام حقوق محتوا و مطالب این سایت برای سازمان دارالقرآن الکریم محفوظ است.© ۲۰۲۴</p>
        </div>
    </section>);
}

export default Footer;