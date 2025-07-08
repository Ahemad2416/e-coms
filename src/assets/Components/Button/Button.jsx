import { FaArrowRight, } from "react-icons/fa6"

const Button = () => {
  return (
    <div>
          {/* Button  */}
                <button
                  type="button"
                  className="w-[215px] h-[55px] bg-[#DA7B67] rounded-full flex items-center p-1 mx-auto mt-[-25px]"
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                    <FaArrowRight className="text-[#DA7B67] text-[20px]" />
                  </div>
        
                  <span className="text-white text-[16px] font-normal flex-1 text-center pr-[25px]">
                    Sign In
                  </span>
        
                </button>
        
    </div>
  )
}

export default Button