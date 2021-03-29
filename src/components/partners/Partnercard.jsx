import './Partnercard.css';
const Partnercard =(props)=>{
    return(
        <div className='partnercard'>
            <img src={props.pLogo} alt={props.pAlt}/>
        </div>
    )
}

export default Partnercard;