import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
   <div className="app__aboutus-overlay flex__center">
    <img src={images.G}  alt="g letter"/>
    </div>
    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">"Welcome to Shadow's Bistro, where culinary passion meets a symphony of flavors. Nestled in [Dehradun], our commitment is to craft an unforgettable dining experience, weaving together the finest ingredients, exceptional service, and a warm ambiance. Discover a place where every meal tells a story, and every guest becomes a cherished part of our culinary journey."</p>      
      <button type="button"className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content-knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">"Founded in the heart of a cozy neighborhood, Shadow's Bistro & Barkery has a captivating history that dates back to a mysterious pact between a culinary visionary and a mischievous canine companion named Shadow. Legend has it that every recipe whispered into the night air was perfected under the moonlit gaze of the loyal pup."</p>      
      <button type="button"className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
