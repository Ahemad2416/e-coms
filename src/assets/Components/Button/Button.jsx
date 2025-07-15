import { FaArrowRight } from "react-icons/fa6";

const Button = ({
  children,
  btntype = "button",
  varaint = "primary",
  isShowIcon = true,
}) => {
  const basestyle = "w-[215px] h-[55px] rounded-full flex items-center p-1 mx-auto";
  const varaints = {
    primary: "bg-[#DA7B67] text-white",
    secondary: "bg-gray-500 text-white", 
  };

  return (
    <button
      type={btntype}
      className={`${basestyle} ${varaints[varaint]}`}
    >
      {isShowIcon && (
        <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
          <FaArrowRight className="text-[#DA7B67] text-[20px]" />
        </div>
      )}

      <span className="text-white text-[16px] font-normal flex-1 text-center pr-[25px]">
        {children}
      </span>
    </button>
  );
};

export default Button;

