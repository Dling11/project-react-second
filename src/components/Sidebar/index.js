import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logos from "../../assets/dlingimage/D-logo.png"
import LogoSubtitle from "../../assets/dlingimage/logo-dling.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser,  } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img className='logo-img' src={Logos} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="creator" />
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassName="active" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='icon-font' />
                </NavLink>
                                                                
                <NavLink 
                    exact="true" 
                    activeclassName="active" //=====> active classname is a special classname
                    className="about-link" 
                    to="/about"
                > 
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" className='icon-font' />
                </NavLink> 

                <NavLink 
                    exact="true" 
                    activeclassName="active" 
                    className='contact-link' 
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className='icon-font' />
                </NavLink> 
            </nav>
            
            <ul>
                <li> 
                    <a target="_blank" rel='noreferrer' href='https://www.youtube.com/'>  {/* rel='noreferrer' means, securely dont use */}
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a> 
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Dling11'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a> 
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://web.facebook.com/rowelljay.rodriguez'>
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a> 
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://web.facebook.com/rowelljay.rodriguez'>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a> 
                </li>
            </ul>
        </div>
    )

}

export default Sidebar