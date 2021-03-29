import Founderscard from '../../components/founders/Founderscard'
import Splitline from '../../utilities/Splitline/Splitline';
import './Founders.css'
const Founders =()=>{
    return(
        <div className="founders">
            <Founderscard
            founderText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis consectetur cupiditate beatae, omnis debitis.'
            founderImg='textimonie.jpg'
            foundeerAlt='CEO'
            founderName='Rudi Choirul Taher'
            founderPost='CEO of Rekam Post'/>
            
            <Splitline/>
            
             <Founderscard
            founderText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis consectetur cupiditate beatae, omnis debitis.'
            founderImg='textimonie.jpg'
            foundeerAlt='CMO'
            founderName='Parjo No Jago'
            founderPost='CMO of Towi Resort'/>
           
        </div>
    )
}

export default Founders;