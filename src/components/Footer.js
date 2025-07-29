import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter,faSquarespace} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (

    <footer>
        <ul>
          <li>
              <a href="#home" className='footer-link'>home</a>
          </li>

           <li>
              <a href="#about" className='footer-link'>about</a>
          </li>

           <li>
              <a href="#services" className='footer-link'>services</a>
          </li>

           <li>
              <a href="#featured" className='footer-link'>featured</a>
          </li>
        </ul>

        <ul className='footer-icons'>
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
        <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
        </p>

      </footer>

)
}

export default Footer