import React from "react";

export default function Label({ id, label }) {
  return (
    <label className="text-lime-50 font-semibold tracking-widest" htmlFor={id}>
      {label}
    </label>
  );
}
