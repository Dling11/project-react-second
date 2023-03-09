import { useEffect, useState } from 'react';
import LogoTitle from "../../assets/dlingimage/D-logo.png";
import { Link } from 'react-router-dom';
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
// import { motion } from "framer-motion";
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['l','i','n','g'];
  const jobArray = ['t', 'h', 'e', ' ', 'n', 'i', 'n', 'j', 'a', 'h', 'a', 'c', 'k' ,'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  // const pathVariants = {
  //   hidden: {
  //     pathLength: 0
  //   },
  //   visible: {
  //     pathLength: 1,
  //     transition: {
  //       duration: 10,
  //     }
  //   }
  // }
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <p>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
      
            <br />

            <span className={`${letterClass} _13`}>I</span>  {/* Be aware of the space of the LetterClass, or else your css will have prob*/}
            <span className={`${letterClass} _14`}>'m</span>

            <img src={LogoTitle} alt="developer" />
            
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
              <br />
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />

          </p>
          <h2>Frontend Developer / Javascript Expert / hacker</h2>
          <Link 
            to="/contact"
            className="flat-button"
          > 
            CONTACT ME
          </Link>
        </div>

        <Logo />                   {/* =====================>Logo */}

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home