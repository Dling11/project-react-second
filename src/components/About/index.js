import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
  return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <div className='letters-h1'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'm', 'e']}
                        idx={15}
                    />
                </div> 

                <p>
                    I am a very curious person when it comes to learning new stuff, I am a skilled person when it comes to frontend developing. I love creating awesome portfolios and contents.
                </p>

                <p>
                    The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too. 
                </p>  

                <p>
                    Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default About