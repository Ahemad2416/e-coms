import { Link } from "react-router-dom"
import Button from "../../../assets/Components/Button/Button"
import { registerSchema } from "../../../assets/Components/Button/Core/RegisterSchema"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = registerSchema;

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>

      <div className="main w-[100%] h-[229px] bg-[#DA7B67]">

        {/* Login Page TItel  */}
        <div className="login-titel pt-[60px]">
          <h2 className="text-[white] text-[28px] text-center">Create Your<br />Account</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Login Titel  */}

        <div className="login-box w-[335px] p-[30px] bg-white shadow-sm rounded-[40px] mx-auto mt-[-50px]">
          <h5 className="mb-4 text-[20px] font-normal">
            Welcome Back! Please Enter <br />Your Details
          </h5>



          {/* Name  */}

          <div className="mb-[14px] text-[15px] font-normal">
            <label className="block mb-1">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {/* Validation Error Tag Show*/}
            <span className='text-red-600 mt-2 text-sm'>{errors.name ? errors.name.message : ""}</span>
          </div>

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

          {/* Moblie Number  */}
          <div className="mb-2 text-[15px] font-normal">
            <label htmlFor="mobile" className="block mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-2">
              <select
                {...register("country_code")}
                className="border border-gray-300 rounded px-2 py-1 text-sm max-w-[80px]"
                defaultValue="+91"
              >
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
              </select>

              <input
                {...register("phone")}
                id="mobile"
                type="tel"
                placeholder="Enter number"
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>

            {/* Validation Error BELOW */}
            <span className="text-red-600 mt-2 text-sm block">
              {errors.country_code?.message || errors.phone?.message || ""}
            </span>
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
          <div className="form-check">
            <div className="flex items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeCheck"
                {...register("acceptTerms")}
              />
              <label htmlFor="agreeCheck" className="form-group text-[15px]">
                I agree to all Terms, Privacy and Fees
              </label>
            </div>

            {/*  Validation Error BELOW */}
            <span className="text-red-600 mt-2 text-sm block">
              {errors.acceptTerms?.message || ""}
            </span>
          </div>

        </div>

        {/* Button  */}
        <div className="flex items-center justify-center mt-[-30px]">
          <Button children="Sign In" btntype="submit" varaint="primary" isShowIcon={true}></Button>
        </div>


      </form>

      <div className="text-center mt-[20px]">
        <span>Not a member?</span> <Link className="font-medium underline">Create an account</Link>
      </div>

    </div>
  )
}

export { Register }