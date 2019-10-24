import React from 'react';
import './Card.scss';

export interface CardProps {
  img: string;
  label: string;
}
export function Card({ img, label }: CardProps): JSX.Element {
  return (
    <div className='card'>
      <img className='card__img' src={img} alt={label} />
      <span className='card__label'>{label}</span>
    </div>
  );
}
