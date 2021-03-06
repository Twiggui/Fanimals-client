import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='menu-burger'>
      <Menu width={300}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signIn'>S'enregistrer</NavLink>
        <NavLink to='/signUp'>S'inscrire</NavLink>
        <NavLink to='/annonces'>Les annonces</NavLink>
        <NavLink to='/animaux'>Mes animaux</NavLink>
        <NavLink to='/urgences'>Urgences</NavLink>
      </Menu>
      <div className='header'>
        <NavLink to='/' className='link'>
          Home
        </NavLink>
        <NavLink to='/signIn' className='link'>
          S'enregistrer
        </NavLink>
        <NavLink to='/signUp' className='link'>
          S'inscrire
        </NavLink>
        <NavLink to='/annonces' className='link'>
          Les annonces
        </NavLink>
        <NavLink to='/animaux' className='link'>
          Mes animaux
        </NavLink>
        <NavLink to='/urgences' className='link'>
          Urgences
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
