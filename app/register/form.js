"use client";

import React from "react";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response }, "response");
  };
  return (
    <form
      className="flex flex-col gap-2 p-20 text-white mx-auto"
      onSubmit={handleSubmit}
    >
      <input name="email" className="border border-black text-black" type="email" />
      <input name="password" className="border border-black text-black" type="password" />
      <button type="submit" className="border border-white rounded-md">
        Register
      </button>
    </form>
  );
}

export default Form;
