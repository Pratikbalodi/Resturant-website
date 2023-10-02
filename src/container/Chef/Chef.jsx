import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding"> 
    <div className="app__wrapper_img app__wrapper_img-reverse">
     <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
      
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Embark on a culinary journey that tantalizes your taste buds, where every ingredient tells a story and every bite is an exploration of flavor.</p>
        </div>
        <p className="p__opensans">Beyond the plate, Chef Words is a celebration of hospitality. Our warm and inviting ambiance, coupled with attentive service, ensures that every visit is not just a meal but a celebration of the senses.</p>
      </div>
      <div className="app__chef-sign">
        <p>Pratik Balodi</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
      </div>
  </div>
);

export default Chef;
