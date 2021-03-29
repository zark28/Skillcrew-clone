import './Footercard.css';

const Footercard =(props)=>{
    return(
        <div className='footer-card'>
            <img className='foot-img' src={props.footImg} alt=""/>
            <div className='foot-card-text'>
                <h4>{props.cardHead}</h4>
                <p>{props.cardText}</p>
            </div>
        </div>
    )
}

export default Footercard;