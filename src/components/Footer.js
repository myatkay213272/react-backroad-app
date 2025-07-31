import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (

    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>

        <ul className='footer-icons'>

          {
            socialLinks.map((link)=>{
              const {id,href,icon} = link
              return(
                <li key={id}>
                  <a 
                    href={href} 
                    target='_blank' 
                    className='footer-icon'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={icon}/>
                  </a>
                </li>
              )
            })
          }            
          </ul>

        <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>

      </footer>

)
}

export default Footer