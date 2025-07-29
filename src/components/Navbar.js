import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter,faSquarespace} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (

    <nav className='navbar'>
        <div className='nav-center'>

          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt="backroads"/>
            <button type="button" className='nav-toggle'  id="nav-toggle">
              <FontAwesomeIcon icon={faBars}/>
            </button>
          </div>

          <ul className='nav-links'  id='nav-links'>
            <li>
              <a href="#home" className='nav-link'>home</a>
            </li>

            <li>
              <a href="#about" className='nav-link'>about</a>
            </li>

            <li>
              <a href="#services" className='nav-link'>services</a>
            </li>

            <li>
              <a href="#tours" className='nav-link'>tours</a>
            </li>
          </ul>

          <ul className='nav-icons'>
            <li>
              <a href="https://www.twitter.com" target='_blank' className='nav-icon'>
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com" className='nav-icon'>
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com" className='nav-icon'>
                <FontAwesomeIcon icon={faSquarespace}/>
              </a>
            </li>
          </ul>

        </div>
      </nav>

  )
}

export default Navbar