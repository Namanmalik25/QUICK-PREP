import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";

const countryCodes = [
  { code:  "+91", country: "India" },
  { code:  "+1", country:  "US" },
  { code:  "+44", country: "United Kingdom" },
  { code:  "+61", country: "Australia" },
  { code:  "+81", country: "Japan" },
];

const Auth = () => {
    const formik = useFormik({
      initialValues: {
        phoneCode: countryCodes[0].code,
        phoneNumber: ""
      },
      validationSchema: Yup.object({
        phoneCode: Yup.string().required(""),
        phoneNumber: Yup.string()
          .required("Please enter a valid 10-digit phone number")
          .matches(/^\d{10}$/, "Please enter a valid 10-digit number")
          
        }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <>
    <div className="flex flex-col item-center justify-center">
        <div className=" p-24 flex flex-col items-start justify-center md:flex-row md:gap-2 font-[Open sans] font-[700] text-[32px] leading-[110%] text-[#242424]">
          <div>Enter your</div>
          <div>Phone Number</div>
        </div>

        {/* making a form inside formic  */}

        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col item-center justify-center px-8 py-8  rounded-[1px]"
        >
          <div className="flex flex-row items-center md:flex md:items-center  md:justify-center">
          <select
            name="phoneCode"
            value={formik.values.phoneCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" w-[190px] gap-7 rounded-[1px] font-[Open sans] font-[700] text-[24px] leading-[110%] text-[#535353]    "
          >
            
            {countryCodes.map((item) => (
              <option  key={item.code} value={item.code}>
                {item.code} ({item.country})
              </option>
              
            ))}
           
          
          </select>

          <input
            className="w-full font-[Open sans] font-[600] text-[24px] leading-[110%] tracking-[10%] text-[#242424]"
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, ""); // Restricts to numbers only
                formik.setFieldValue("phoneNumber", onlyNumbers);
              }}
              onBlur={formik.handleBlur}
              inputMode="numeric"

               />
</div>
          <div className=" border-[1px]  border-[#535353] rotate-0 "></div>

          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className=" pt-3  font-[Open sans] font-[600] text-[16px] leading-[120%]  text-[#FE0808]">{formik.errors.phoneNumber}</div>
        )}
    <div className="flex flex-col justify-center pt-12  ">
       <Button backgroundColor="bg-[#0B2272]">
        
        Get OTP</Button>
        </div>   
        </form>
        </div>
    </>
  );
};

export default Auth;
