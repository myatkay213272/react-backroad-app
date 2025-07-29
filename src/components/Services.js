import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSocks, faTree, faWallet } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (

     <section>
        <div>
          <h2>Our <span>services</span></h2>
        </div>

        <div>
        <article>
          <span><FontAwesomeIcon icon={faWallet}/></span>

          <div>
            <h4>saving money</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.</p>
          </div>
        </article>

        <article>
          <span><FontAwesomeIcon icon={faTree}/></span>
          <div>
            <h4>endless hiking</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.</p>
          </div>
        </article>

        <article>
          <span><FontAwesomeIcon icon={faSocks}/></span>
          <div>
            <h4>amazing comfort</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.</p>
          </div>
        </article>
        </div>
      </section>
)
}

export default Services