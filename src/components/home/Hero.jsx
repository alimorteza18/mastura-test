import Image from "next/image";
import Navbar from "./Navbar";

const Hero = ({ setModal }) => {
    return (
        <div className="sm:bg-none w-full pb-24 bg-mobile">
            <Navbar setModal={setModal}/>
            <section className="flex w-full md:flex-row flex-col items-center justify-center  md:space-x-28 space-x-0 md:space-x-reverse mt-10 ">
                <Image width={400} height={400} quality={100} alt="quran" src='/images/hero-image.svg' className="z-10 md:hidden flex" />
                <div className="flex flex-col space-y-3 z-10 max-w-[1400px] md:px-0 px-4 text-center md:text-right">
                    <h1 className="font-bold md:text-4xl text-2xl overflow-hidden">
                        مسطورا، فرصت زندگی با آیه‌ها
                    </h1>
                    <p className="text-[#2A2B2D] flex flex-col">اینجا میتونی محتواهای قرآنی متنوع و جذاب ببینی و منتشر کنی و با ورود
                        <span>به مسیر مسطورا،  کلی جایزه ببری</span>
                    </p>
                    <button onClick={() => setModal(true)} className="text-white bg-m-green md:w-48 w-full md:py-2 py-4 rounded-2xl">
                        <p>همین الان شروع کن</p>
                    </button>
                </div>
                <Image src='/images/hero-image.svg'
                    width={400}
                    height={400}
                    quality={100}
                    alt="phone-imgae"
                    className="z-10 max-w-[1400px] md:flex hidden" />
                <div className="md:w-[850px] w-[500px] md:h-[700px] h-[400px] animation bg-[#2BDC98] absolute rounded-full -top-16 left-0 blur-[200px] sm:block hidden">

                </div>
                <div className="w-[600px]  md:h-[900px] h-[300px] animation bg-[#4cd27f] absolute rounded-full md:-top-44 -bottom-44 -right-[500px] blur-[200px] sm:block hidden">

                </div>
            </section>
        </div>
    );
}

export default Hero;