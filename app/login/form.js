"use client";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
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
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (!response?.error) {
        setError("Success");
        router.push("/");
        router.refresh();
      } else {
        setError("Failed to login");
      }
    },
  });

  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/images/hero.jpg"}
        fill
        alt="login-bg"
        sizes="100vw"
        className="h-full w-full object-cover -z-20"
      />
      <div className="w-full h-full bg-opacity-50 p-10">
        <nav className="px-10 py-4 h-20 relative w-60">
          <Image
            src={"/images/logo.png"}
            fill
            alt="logo"
            sizes="100px"
            className="object-contain w-20"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-80 w-2/5 min-w-[400px] min-h-2/5 self-center text-white p-16 box-border flex flex-col gap-8">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-center gap-8"
            >
              <h2 className="text-4xl font-semibold mb-4">Sign in</h2>
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
                    placeholder="mail@email.com"
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
                className="flex w-full justify-center items-center h-10 bg-red-600 text-lg mt-4"
              >
                Sign In
              </button>
              <span className="text-white flex flex-row gap-2 justify-end">
                <Link href={"/register"}>Create an account</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
