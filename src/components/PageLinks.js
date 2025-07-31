import { pageLinks } from "../data"

const PageLinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}  id='nav-links'>
        {
            pageLinks.map((link)=>(
            <li key={link.id}>
                <a 
                href={link.href} 
                className={itemClass}
                rel='noreferrer'
                >
                {link.text}
                </a>
            </li>
            ))
        }
    </ul>
  )
}

export default PageLinks