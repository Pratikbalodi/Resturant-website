import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The new Flavour"/>
      <h1 className="app__header-h1">Nobody but only food can fix me</h1>
     <p className="p__opensans " style={{margin:'2rem 0'}}>"Sometimes, the only remedy for the soul is a plate filled with the comfort of good food—a silent healer, a loyal companion, mending us one bite at a time."</p>
      <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
   <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
