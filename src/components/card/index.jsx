import React from 'react';
import './card.css'

const Card = ({ heading, description, buttonText, footnote, featured }) => {
  let styleClasses= "card flex flex-col justify-items-center rounded-3xl md:h-96 bg-card-ornament space-y-2.5 p-8 bg-roa text-neutral-100 rounded text-center mb-8 hover:scale-105 ease-in-out transition-transform"
  if(featured) styleClasses += " bg-[#F5E6C7]"

  return(
    <div className={styleClasses}>

      {/* <figure><img src="" alt="" srcset="" /></figure> */}
      <h1 className="font-bold mt-14 text-lg">{heading}</h1>
      <p className="md:flex-grow">{description}</p>

      <button 
        className="mt-auto hover:shadow-md active:shadow-inner transition-shadow px-8 py-4 w-full bg-neutral-0 border border-neutral-100 bg-amber-50 hover:bg-white box-border rounded-full font-bold text-xl" type={"button"}>{buttonText}</button>
      <p className='text-ellipsis overflow-hidden whitespace-nowrap'><small className="text-black">{footnote}</small></p>
    
    </div>
  )
};

Card.defaultProps = {
  featured: false
};

export default Card;