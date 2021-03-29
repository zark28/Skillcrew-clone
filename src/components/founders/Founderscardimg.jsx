import './Founderscardimg.css';
const Founderscardimg =(props)=>{
    return(
        <div className="founderscardimg">
            <img src={props.foundersImg} alt={props.foundersAlt}/>
            <div>
                <h4>{props.foundersName}</h4>
                <p>{props.foundersPost}</p>
            </div>
            
        </div>


    )
}

export default Founderscardimg;