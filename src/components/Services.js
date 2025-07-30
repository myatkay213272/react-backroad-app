import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSocks, faTree, faWallet } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (

     <section className='section services' id='services'>
        <div className='section-title'>
          <h2>Our <span>services</span></h2>
        </div>

        <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'><FontAwesomeIcon icon={faWallet}/></span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.</p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'><FontAwesomeIcon icon={faTree}/></span>
          <div className='service-info'>
            <h4 className='service-title'>endless hiking</h4>
            <p className='service-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.</p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'><FontAwesomeIcon icon={faSocks}/></span>
          <div className='service-info'>
            <h4 className='service-title'>amazing comfort</h4>
            <p className='service-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.</p>
          </div>
        </article>
        </div>
      </section>
)
}

export default Services