import logo from '../images/logo.svg'
import { socialLinks } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (

    <nav className='navbar'> 
    {/*  style={{position:'fixed' ,background:'white',width:'100%', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',zIndex:'999'}}> */}
        <div className='nav-center'>

          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt="backroads"/>
            <button type="button" className='nav-toggle'  id="nav-toggle">
              <FontAwesomeIcon icon={faBars}/>
            </button>
          </div>

          <PageLinks parentClass='nav-links' itemClass='nav-link'/>

          <ul className='nav-icons'>

            {
              socialLinks.map((link)=>{
                const {id,href,icon} = link
                return(
                  <li key={id}>
                    <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
                      <FontAwesomeIcon icon={icon}/>
                    </a>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </nav>

  )
}

export default Navbar