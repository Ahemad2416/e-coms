
const ForgetPassword = () => {
  return (
    <div>ForgetPassword

        {/* Moblie Number  */}

          <div className="mb-2 text-[15px] font-normal">
            <label htmlFor="mobile" className="block mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-2">
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm max-w-[80px]"
                
                defaultValue="+91"
              >
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
              </select>

              <input
                id="mobile"
                type="tel"
                placeholder="Enter number"
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                
              />
            </div>
          </div>


    </div>
  )
}

export {ForgetPassword}