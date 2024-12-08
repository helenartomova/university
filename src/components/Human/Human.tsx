import React from 'react';
import './Human.scss';

interface HumanProps {
  url: string;
  name: string;
  position: string;
  description: string;
}

export const Human: React.FC<HumanProps> = ({ url, name, position, description }) => (
  <div className='tile'>
    <div className='tile__image__block'>
      <img
        className='tile__image'
        src={url}
      />
    </div>
    <div className='tile__content'>
      <h2 className='tile__name'>{name}</h2>
      <p className='tile__position'>{position}</p>
      <p className='tile__description'>{description}</p>
    </div>
  </div>
);