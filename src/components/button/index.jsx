import React from "react";
import PropTypes from 'prop-types';

export const Button = ({primary, buttonText}) => {
  let styleClasses = "mt-auto hover:shadow-md active:shadow-inner transition-shadow px-8 py-4 w-full bg-neutral-0 border border-neutral-100 bg-amber-50 hover:bg-white box-border border-black rounded-full font-bold text-xl";
  if (!primary) {
    styleClasses += " bg-transparent border-zinc-200";
  }

  return (
    <button data-primary={primary} className={styleClasses} type={"button"}>
        {buttonText}
    </button>
  );
}

Button.defaultProps = {
  buttonText: 'Action',
  primary: true
}