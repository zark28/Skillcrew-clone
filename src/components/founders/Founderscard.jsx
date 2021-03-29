import Founderscardimg from "./Founderscardimg"
import Founderscardtext from "./Founderscartext"
import './Founderscard.css';

const Founderscard =(props)=> {
    return(
        <div className="founderscard">
            <Founderscardtext
            foundersText={props.founderText}
            />

            <Founderscardimg
            foundersImg={props.founderImg}
            foundersAlt={props.founderAlt}
            foundersName={props.founderName}
            foundersPost={props.founderPost}/>
        </div>
    )
}

export default Founderscard;