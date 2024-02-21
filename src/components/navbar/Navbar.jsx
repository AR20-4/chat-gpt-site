import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

/*wrap in a react fragment */
const Menu = () => (
  <>  
  <p><a href="#home">Home</a></p>
          <p><a href="#whpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
         <Menu  /* call const for menu*/ />   
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
     
      <div className="gpt3__navbar-menu">
        {toggleMenu  /* open and close toogle menu*/
        ? <RiCloseLine color="fff" size={50} onClick={()=> setToggleMenu(false)}/>
        : <RiMenu3Line color="fff" size={50} onClick={()=> setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu /* again call const for menu*//>
             <div className="gpt3__navbar-menu_container-links-sign">
             <p>Sign in</p>
             <button type="button"> Sign up</button>
             </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar