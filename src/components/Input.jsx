import React from "react";

export default function Input({ id, type }) {
  return (
    <input
      type={type}
      required
      name={id}
      id={id}
      placeholder={`Enter your ${id} here...`}
      className="p-2 rounded-lg text-emerald-800 border-2 border-emerald-300 placeholder:text-emerald-700"
    />
  );
}
