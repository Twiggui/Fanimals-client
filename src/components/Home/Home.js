import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='annonces'>
        <Link to='/annonces'>
          <button className='button'>Les annonces</button>
        </Link>
      </div>
      <div className='animaux'>
        <Link to='/animaux'>
          <button className='button'>Mes animaux</button>
        </Link>
      </div>
      <div className='urgences'>
        <Link to='/urgences'>
          <button className='button'>Urgences</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
