import React from 'react';
import { Button } from '../button';
import './card.css'

const Card = ({ heading, description, buttonText, footnote, featured }) => {
  let styleClasses= "card flex flex-col justify-items-center rounded-3xl md:h-96 bg-card-ornament space-y-2.5 p-8 text-neutral-100 rounded text-center mb-8 hover:scale-105 ease-in-out transition-transform"
  if(featured) styleClasses += " bg-gold"
  else styleClasses += " bg-roa"

  return(
    <div className={styleClasses}>

      {/* <figure><img src="" alt="" srcset="" /></figure> */}
      <h1 className="font-bold mt-14 text-lg">{heading}</h1>
      <p className="md:flex-grow">{description}</p>
      <Button buttonText={buttonText} />
      <p className='text-ellipsis overflow-hidden whitespace-nowrap'><small className="text-black"><em className='italic'>{footnote}</em></small></p>
    
    </div>
  )
};

Card.defaultProps = {
  heading: 'Card heading',
  description: 'A small paragraph usually taking up to two lines.',
  buttonText: 'Action',
  footnote: 'A footnote might come handy.',
  featured: false
};

export default Card;