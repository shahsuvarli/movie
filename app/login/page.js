"use client";

import Image from "next/legacy/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

function Auth() {
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

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="relative w-full h-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-10 py-4">
          <Image src={"/images/logo.png"} width={200} height={100} alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 w-2/5 min-w-[400px] h-2/5 self-center text-white p-16 flex flex-col gap-8">
            <h2 className="text-4xl font-semibold">Sign in</h2>
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
                </span>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center items-center h-10 bg-red-600 text-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
