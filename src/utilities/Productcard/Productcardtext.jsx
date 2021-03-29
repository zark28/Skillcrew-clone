import './Productcardtext.css';
const Productcardtext =(props)=>{
    return(
            <div className='productcard-text'>
                <h4>{props.pcardHead}</h4>
                <p>{props.pcardText}</p>
                <p>{props.pcardRate}</p>
            </div>
    )
}

export default Productcardtext;