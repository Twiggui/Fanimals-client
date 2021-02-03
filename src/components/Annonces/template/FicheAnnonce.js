import React from 'react';
import { Link } from 'react-router-dom';
import './FicheAnnonce.scss';
import chat from '../../../images/chat.jpg';

const FicheAnnonce = (props) => {
  const { animal } = props;
  return (
    <div className='ficheAnnonce'>
      <div className='presentationAnimal'>
        <h2> {animal.name}</h2>
        <img className='imageAnimal' src={chat} alt="profil de l'animal"></img>
        <div className='caracteristiques'>
          <div className='sexe'>{animal.sex}</div>
          <div className='age'>age</div>
          <div className='race'>{animal.race}</div>
          <div>Date de mise à l'adoption : {animal.adoptionDepositDate}</div>
        </div>
        <button className='detailAnnonceBoutton'>
          <Link to={`/annonces/:${animal.id}`}>Voir l'annonce !</Link>
        </button>
      </div>
      <div className='aside'>
        <div className='detailAnnonce'></div>
      </div>
    </div>
  );
};

export default FicheAnnonce;
