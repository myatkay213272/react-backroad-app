import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap} from '@fortawesome/free-solid-svg-icons';


const Tour = () => {
  return (

     <section>
        <div>
          <h2>featured <span>tours</span> </h2>
        </div>

        <div>
          <article>
            <div>
              <img src={tour1} alt=''/>
              <p>auguest 26th,2020</p>
            </div>

            <div>
              <div>
                <h4>Tibet Adventure</h4>
              </div>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.</p>
              <div>
                <p><FontAwesomeIcon icon={faMap}/> China</p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </article>


          <article>
            <div>
              <img src={tour2} alt=''/>
              <p>october 1th,2020</p>
            </div>
            <div>
              <h4>best of java</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.</p>
              <div>
                <p><FontAwesomeIcon icon={faMap}/> indonesia</p>
                <p>11 days</p>
                <p>from $1400</p>
              </div>
            </div>
          </article>


          <article>
            <div>
              <img src={tour3} alt=''/>
              <p>september 15th,2020</p>
            </div>
            <div>
              <h4>explore hong kong</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.</p>
              <div>
                <p><FontAwesomeIcon icon={faMap}/>hong kong</p>
                <p>8 days</p>
                <p>from $5000</p>
              </div>
            </div>
          </article>

          <article>
            <div>
              <img src={tour4} alt=''/>
              <p>december 5th,2019</p>
            </div>
            <div>
              <h4>kenya highlights</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.</p>
              <div>
                <p><FontAwesomeIcon icon={faMap}/> kenya</p>
                <p>20 days</p>
                <p>from $3300</p>
              </div>
            </div>
          </article>

        </div>
      </section>
)
}

export default Tour