import React from 'react';
import FicheAnnonce from './template/FicheAnnonce';
import './Annonces.scss';

const Annonces = () => {
  return (
    <div className='annonces'>
      <div className='filtres'></div>
      <FicheAnnonce />
      <FicheAnnonce />
      <FicheAnnonce />
    </div>
  );
};

export default Annonces;
