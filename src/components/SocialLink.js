import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({href,icon,itemClass}) => {
  return (
    <li>
        <a 
        href={href} 
        target='_blank' 
        className={itemClass}
        rel='noreferrer'
        >
        <FontAwesomeIcon icon={icon}/>
        </a>
    </li>
  )
}

export default SocialLink