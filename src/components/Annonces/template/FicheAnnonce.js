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
      </div>
      <div className='aside'>
        <div className='caracteristiques'>
          <div className='general'>Général</div>
          <div className='general'>Médical</div>
          <div className='general'>Comportement</div>
          <div className='sexe'>{animal.sex}</div>
          <div className='vaccin'>Vacciné : {animal.vaccine}</div>
          <div className='caractere1'>{animal.temper1}</div>
          <div className='age'>age</div>
          <div className='tatouage'>Tatouage : {animal.tatoo}</div>
          <div className='caractere2'>{animal.temper2}</div>
          <div className='couleur'>{animal.color}</div>
          <div className='medical1'>{animal.health1}</div>
          <div className='caractere3'>{animal.temper3}</div>
          <div className='race'>{animal.race}</div>
          <div className='medical2'>{animal.health2}</div>
          <div className='caractere4'>{animal.temper4}</div>
        </div>
        <div className='detailAnnonce'>
          <div>Date de mise à l'adoption : {animal.adoptionDepositDate}</div>
          <Link to={`/annonces/:${animal.id}`}>
            <button className='detailAnnonceBoutton'>Voir l'annonce !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FicheAnnonce;
