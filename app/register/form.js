"use client";

import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

function Form() {
  const [error, setError] = useState("");
  const router = useRouter();
  const formik = useFormik({
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response?.error) {
        setError("Success");
        router.push("/");
        router.refresh();
      } else {
        setError("Failed to sign up");
      }
    },
  });

  return (
    <div className="relative w-full h-screen bg-no-repeat bg-center bg-fixed bg-cover">
      <Image
        src={"/images/hero.jpg"}
        fill
        alt="login-bg"
        className="h-full w-full bg-cover -z-20 object-cover"
      />
      <div className="bg-black w-full h-full bg-opacity-50 p-10">
        <nav className="px-10 py-4 h-20 relative w-60">
          <Image
            src={"/images/logo.png"}
            fill
            alt="logo"
            sizes="100px"
            className="w-20"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 w-2/5 min-w-[400px] h-2/5 self-center text-white p-16 flex flex-col gap-8">
            <h2 className="text-4xl font-semibold mb-6">Register</h2>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-center gap-8"
            >
              <div className="flex flex-col h-48 justify-evenly child:flex child:flex-col w-full gap-6">
                <span className="w-full relative flex">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full h-12 border-[0.5px] border-slate-400 rounded-md px-4 placeholder:text-lg text-black text-lg"
                    placeholder="name@email.com"
                  />
                  <span
                    className={`bg-[#fe343476] mt-2 rounded-md p-2 box-border ${
                      formik.errors.email ? "block" : "hidden"
                    }`}
                  >
                    {formik.errors.email}
                  </span>
                </span>
                <span className="w-full relative flex">
                  <label htmlFor="password" className="text-lg">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full h-12 border-[0.5px] border-slate-400 rounded-md px-4 placeholder:text-lg text-black text-lg"
                    placeholder="********"
                  />
                  <span
                    className={`bg-[#fe343476] mt-2 rounded-md p-2 box-border ${
                      formik.errors.password ? "block" : "hidden"
                    }`}
                  >
                    {formik.errors.password}
                  </span>
                </span>
              </div>
              <span
                className={`text-white ${
                  error != "Success" ? "bg-red-400" : "bg-[#09f209ad]"
                } w-full p-2 font-bold ${error || "hidden"}`}
              >
                {error}
              </span>
              <button
                type="submit"
                className="flex w-full justify-center items-center h-10 bg-red-600 text-lg mt-4 hover:cursor-pointer"
              >
                Sign Up
              </button>
              <span className="text-white flex flex-row gap-2 justify-end">
                <Link href={"/login"}>Login</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
