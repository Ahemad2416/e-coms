
import { Link } from "react-router-dom"
import Button from "../../../assets/Components/Button/Button"
import { loginSchema } from "../../../assets/Components/Button/Core/LoginSchema"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = loginSchema;

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log(data);
  }




  return (
    <div>

      <div className="main w-[100%] h-[229px] bg-[#DA7B67]">

        {/* Login Page TItel  */}
        <div className="login-titel pt-[60px]">
          <h2 className="text-[white] text-[28px] text-center">Welcome Back! <br />Let's Get Started</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

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
              {...register("email")}
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />

            {/* Validation Error Tag Show*/}
            <span className='text-red-600 mt-2 text-sm'>{errors.email ? errors.email.message : ""}</span>
          </div>

          {/* Password  */}

          <div className="mb-[17px] text-[15px] font-normal">
            <label className="block mb-1">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {/* Validation Error Tag Show*/}
            <span className='text-red-600 mt-2 text-sm'>{errors.password ? errors.password.message : ""}</span>
          </div>

          {/* Forget Password  */}

          <div className="mb-[15px] text-[15px] font-normal">
            <p className="underline text-sm opacity-50 cursor-pointer">
             <Link to={"/auth/forget"}>Forgot Password?</Link>
            </p>
          </div>

        </div>

        {/* Button  */}
        <div className="flex items-center justify-center mt-[-30px]">
          <Button children="Sign In" btntype="sumbit" varaint="primary" isShowIcon={true}></Button>
        </div>


      </form>

      <div className="text-center mt-[20px]">
        <span>Not a member?</span> <Link to={"/auth/register"} className="font-medium underline">Create an account</Link>
      </div>

    </div>
  )
}

export { Login }