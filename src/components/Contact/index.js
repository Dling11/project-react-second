import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <div className='letters-h1'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        idx={15}
                        strArray={['C','o','n','t','a','c','t', ' ', 'M', 'e']}
                    />
                </div>
                <p>
                    Hellow my name is Ninja Hacker, I am very interested in working with a company or freelance opportunities. Feel free to contact me anytime, I am grateful always at your services.
                </p>
                <div className="contact-form">
                    <form>
                        <ul>

                            <li className='half'>
                                <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Name' 
                                    required 
                                />
                            </li>
                            <li className='half'>
                                <input 
                                    type="email" 
                                    name='email' 
                                    placeholder='Email' 
                                    required 
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="subject" 
                                    type="text" 
                                    name="subject" 
                                    required
                                />
                            </li>
                            <li>
                                <textarea 
                                    name="message" 
                                    placeholder='Message' 
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input 
                                    type="submit" 
                                    className='flat-button' 
                                    value="SEND" 
                                />
                            </li>

                        </ul>
                    </form>
                </div>

            </div>
            <div className='info-map'>
                Rowell Jay Rodriguez,
                <br />
                Philippines
                <br />
                North Cotabato, Makilala <br />
                Malaang, Poblacion
                <span>Rodriguez.rowelljay@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[6.972553785398329, 125.08266435397572]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[6.972553785398329, 125.08266435397572]}>
                        <Popup>The Ninja Hacker Lives, HERE !</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        <Loader type="pacman" />
    </>
  )
}

export default Contact



//=====> fix this someday issue slowdown my internet lol

// import { useState, useEffect, useRef } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import "./index.scss"
// import emailjs from '@emailjs/browser';  

// const Contact = () => {
//     const [letterClass, setLetterClass] = useState('text-animate');
//     const form = useRef();

//     useEffect(() => {
//         setTimeout(() => {
//           setLetterClass('text-animate-hover')
//         }, 3000)
//       }, [])

//     //  emailJs
//       const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm(
//             import.meta.env.VITE_APP_SERVICE_ID,
//             import.meta.env.VITE_APP_TEMPLATE_ID,
//             form.current, 
//             import.meta.env.VITE_APP_PUBLIC_KEY
//         )
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//       }
//   return (
//     <>
//         <div className='container contact-page'>
//             <div className='text-zone'>
//                 <div className='letters-h1'>
//                     <AnimatedLetters 
//                         letterClass={letterClass}
//                         idx={15}
//                         strArray={['C','o','n','t','a','c','t', ' ', 'M', 'e']}
//                     />
//                 </div>
//                 <p>
//                     Hellow my name is Ninja Hacker, I am very interested in working with a company or freelance opportunities. Feel free to contact me anytime, I am grateful always at your services.
//                 </p>
//                 <div className="contact-form">
//                     <form ref={form} onSubmit={sendEmail}>
//                         <ul>

//                             <li className='half'>
//                                 <input 
//                                     type="text" 
//                                     name='name' 
//                                     placeholder='Name' 
//                                     required 
//                                 />
//                             </li>
//                             <li className='half'>
//                                 <input 
//                                     type="email" 
//                                     name='user_email' 
//                                     placeholder='Email' 
//                                     required 
//                                 />
//                             </li>
//                             <li>
//                                 <input 
//                                     placeholder="subject" 
//                                     type="text" 
//                                     name="subject" 
//                                     required
//                                 />
//                             </li>
//                             <li>
//                                 <textarea 
//                                     name="message" 
//                                     placeholder='Message' 
//                                     required
//                                 ></textarea>
//                             </li>
//                             <li>
//                                 <input 
//                                     type="submit" 
//                                     className='flat-button' 
//                                     value="SEND" 
//                                 />
//                             </li>

//                         </ul>
//                     </form>
//                 </div>

//             </div>
//         </div>
//         <Loader type="pacman" />
//     </>
//   )
// }

// export default Contact



