import { Button } from "antd";

const Step2 = ({handleActiveCode,getCodeLoading,activeCode,setActiveCode,modal, setModal,setStep,mobile}) => {
    return ( <div className=" p-4 w-full max-w-md max-h-full">
    {/* <!-- Modal content --> */}
    <div className="relative bg-white rounded-lg shadow py-6">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">

            <button onClick={()=> setModal(false)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  " data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[24px] font-bold">ثبت کد تایید</h1>
            <p className="text-[18px] text-[#2A2B2D] mt-8">کد ارسال شده به {mobile|| ' - '} رو برامون بنویس</p>
        </div>

        <div className="p-4 md:p-5">
           
                <div className="space-y-4">
                    <input type="text" name="activeCode" id="activeCode" value={activeCode} onChange={e => setActiveCode(e.target.value)} className="bg-gray-50 border border-gray-300 outline-none text-sm rounded-lg block w-full p-2.5 py-4" placeholder="کد تایید" required />
                </div>
                <div onClick={()=>setStep(1)} className="text-[#3B9869] text-sm mt-2 cursor-pointer">
                    شماره تلفن اشتباه است ؟ تغییر شماره
                </div>
             
                {/* <button type="submit" ></button> */}
                <Button onClick={handleActiveCode} loading={getCodeLoading} disabled={getCodeLoading}   className="w-full text-white bg-[#3B9869] hover:bg-[#32855c] focus:ring-4 focus:outline-none rounded-lg text-sm p-2 text-center mt-4" >
                            تایید و ورود 
                </Button>  
                {/* <Button onClick={redirectToProfile}>
                    ریدایرکت
                    </Button>       */}
           
        </div>
    </div>
</div> );
}
 
export default Step2;