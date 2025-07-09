
import { Link } from "react-router-dom"
import Button from "../../../assets/Components/Button/Button"

const Login = () => {
  return (
    <div>
      
      <div className="main w-[100%] h-[229px] bg-[#DA7B67]">

        {/* Login Page TItel  */}
        <div className="login-titel pt-[60px]">
          <h2 className="text-[white] text-[28px] text-center">Welcome Back! <br />Let's Get Started</h2>
        </div>
      </div>

      <form>

        {/* Login Titel  */}

        <div className="login-box w-[335px] p-[30px] bg-white shadow-sm rounded-[40px] mx-auto mt-[-50px]">
          <h5 className="mb-4 text-[20px] font-normal">
            Access Your Account and <br />Explore More
          </h5>

          {/* Email Address  */}

          <div className="mb-[14px] text-[15px] font-normal">
            <label className="block mb-1">
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Password  */}

          <div className="mb-[17px] text-[15px] font-normal">
            <label className="block mb-1">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Forget Password  */}

          <div className="mb-[15px] text-[15px] font-normal">
            <p className="underline text-sm opacity-50 cursor-pointer">
              Forgot Password?
            </p>
          </div>

        </div>

        {/* Button  */}
        <Button children ="Sign In" btntype="sumbit" varaint="primary" isShowIcon={true}></Button>

      </form>

      <div className="text-center mt-[20px]">
        <span>Not a member?</span> <Link className="font-medium underline">Create an account</Link>
      </div>

    </div>
  )
}

export {Login}