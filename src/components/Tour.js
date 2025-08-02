import Title from './Title';
import { tours } from '../data';
import Tours from './Tours';


const Tour = () => {
  return (

     <section className='section' id='tours'>
        <Title title='featured' subTitle='tours'/>

        <div className='section-center featured-center'>

          {
            tours.map((tour)=>{
              return (
               <Tours key={tour.id} {...tour}/>
              )
            }
            )
          }

        </div>
      </section>
)
}

export default Tour