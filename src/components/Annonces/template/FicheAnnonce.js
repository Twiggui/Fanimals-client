import React from 'react';
import { Link } from 'react-router-dom';
import './FicheAnnonce.scss';
import chat from '../../../images/chat.jpg';

const FicheAnnonce = () => {
  return (
    <div className='ficheAnnonce'>
      <div className='presentationAnimal'>
        <h2> Nom de l'animal</h2>
        <img className='imageAnimal' src={chat} alt="profil de l'animal"></img>
      </div>
      <div className='aside'>
        <div className='caracteristiques'>
          <div className='sexe'>sexe</div>
          <div className='vaccin'>vaccin</div>
          <div className='caractere1'>caractere1</div>
          <div className='age'>age</div>
          <div className='tatouage'>tatouage</div>
          <div className='caractere2'>caractere2</div>
          <div className='couleur'>couleur</div>
          <div className='medical1'>medical1</div>
          <div className='caractere3'>caractere3</div>
          <div className='race'>race</div>
          <div className='medical2'>medical2</div>
          <div className='caractere4'>caractere4</div>
        </div>
        <div className='detailAnnonce'>
          <div>Date de mise à l'adoption : </div>
          <Link to='/annonces/:idAnimal'>
            <button className='detailAnnonceBoutton'>Voir l'annonce !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FicheAnnonce;
