import './FicheDetail.scss';
import React from 'react';
import chat from '../../images/chat.jpg';

const FicheDetail = () => {
  return (
    <div className='ficheDetail'>
      <div className='recapitulatif'>
        <div className='presentationAnimal'>
          <h2> Nom de l'animal</h2>
          <img
            className='imageAnimal'
            src={chat}
            alt="profil de l'animal"
          ></img>
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
          </div>
        </div>
      </div>
      <div className='details'>
        <div className='histoire'>
          <h3>Association : </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lorem
            nec neque congue fermentum at sed mauris. Quisque elementum, nisl
            sed mollis pulvinar, ipsum augue vestibulum ante, ut accumsan quam
            eros nec nibh. Mauris vel vestibulum sem. Nunc tristique rutrum
            neque, lobortis cursus augue cursus ut. Praesent blandit sed urna id
            iaculis. Suspendisse at sem et ex hendrerit semper ullamcorper nec
            est. Maecenas a ex suscipit, luctus risus at, fringilla risus..{' '}
          </p>
        </div>
        <div className='galeriePhotos'>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheDetail;
