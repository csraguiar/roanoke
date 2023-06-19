import React from 'react';

const Card = ({ heading, description, buttonText, footnote }) => (
  <div className="card flex flex-col h-80 bg-card-ornament space-y-2.5 p-8 bg-roa text-neutral-100 rounded-xl text-center mb-8">

    {/* <figure><img src="" alt="" srcset="" /></figure> */}
    <h1 className="font-bold mt-14 text-lg">{heading}</h1>
    <p className="flex-grow">{description}</p>

    <button className="mt-auto shadow-sm shadow-black-100 hover:shadow-lg active:shadow-inner transition-shadow px-8 py-4 w-full bg-neutral-0 border border-neutral-100  hover:bg-white active:outline-2 focus:outline box-border rounded-full font-bold text-xl" type={"button"}>{buttonText}</button>
    <p><small className="text-black">{footnote}</small></p>
  
  </div>
);

export default Card;