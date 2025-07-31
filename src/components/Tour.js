import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap} from '@fortawesome/free-solid-svg-icons';
import Title from './Title';
import { tours } from '../data';


const Tour = () => {
  return (

     <section className='section' id='tours'>
        <Title title='featured' subTitle='tours'/>

        <div className='section-center featured-center'>

          {
            tours.map((tour)=>{
              const {id,image,date,title,info,icon,location,duration,cost} = tour
              return (
                <article className='tour-card' key={id}>
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
            )
          }

        </div>
      </section>
)
}

export default Tour