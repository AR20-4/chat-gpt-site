import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat sint hic quam rem inventore, illum, architecto distinctio, excepturi dolor natus soluta perferendis odit cupiditate tempora earum ipsa culpa. Cumque.</p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Email"/>
            <button type ="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="people"/>
            <p>100's of people trust our AI programs to manage their business</p>
          </div>
          </div>
          <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header