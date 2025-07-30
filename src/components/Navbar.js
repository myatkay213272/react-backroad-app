import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
            {
              pageLinks.map((link)=>(
                <li key={link.id}>
                  <a href={link.href} className='nav-link' rel='noreferrer'>
                    {link.text}
                  </a>
                </li>
              ))
            }
          </ul>

          <ul className='nav-icons'>

            {
              socialLinks.map((link)=>(
                <li key={link.id}>
                  <a href={link.href} target='_blank' className='nav-icon'>
                    <FontAwesomeIcon icon={link.icon}/>
                  </a>
                </li>
              ))
            }
          </ul>

        </div>
      </nav>

  )
}

export default Navbar