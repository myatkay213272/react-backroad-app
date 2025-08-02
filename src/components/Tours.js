import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tours = ({id,image,date,title,info,icon,location,duration,cost}) => {
  return (
     <article className='tour-card'>
        <div className='tour-img-container'>
        <img src={image} className='tour-img' alt=''/>
        <p className='tour-date'>{date}</p>
        </div>

        <div className='tour-info'>
        <div className='tour-title'>
            <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
            <p>
            <span>
                <FontAwesomeIcon icon={icon}/>
                {location}
            </span>
            </p>
            <p>{duration} days</p>
            <p>from ${cost}</p>
        </div>
        </div>
    </article>
  )
}

export default Tours