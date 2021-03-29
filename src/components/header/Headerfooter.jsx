import Footercard from '../../utilities/Footercard/Footercard';
import './Headerfooter.css';
const Headerfooter =()=>{
    return(
        <div className='head-footer'>
            <Footercard
            cardHead='Sheduled Class'
            footImg='calendar.svg'
            cardText={`It's never too late to start`}
            />

            <Footercard
            cardHead='Community to Help'
            footImg='user-group.svg'
            cardText='Be helped by our large community'
            />

            <Footercard
            cardHead='Various Pricing'
            footImg='wallet.svg'
            cardText='Various price options for you'
            />
        </div>
    )
}

export default Headerfooter;