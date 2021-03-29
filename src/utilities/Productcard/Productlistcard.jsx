import Productcardimg from './Productcardimg';
import Productcardtext from './Productcardtext';
import './Productlistcard.css';
const Productlistcard =(props)=>{
    return(
        <div className='productlistcard'>
            <Productcardimg
            pcardImg={props.cardImg}/>

            <Productcardtext
            pcardHead={props.cardHeader}
            pcardText={props.cardText}
            pcardRate={props.cardRate}/>
            
        </div>
    )
}

export default Productlistcard;