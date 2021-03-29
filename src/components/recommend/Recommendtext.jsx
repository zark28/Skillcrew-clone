import Recommenddescribe from "./Recommenddescribe";
import Recommendhead from "./Recommendhead"
import Button from "../../utilities/Button/Button"
import './Recommendtext.css';

const Recommendtext = (props)=>{
    return(
        <div className="recommendtext">
            <Recommendhead/>
            <Recommenddescribe/>
            <Button 
            text={props.btnText}/>
        </div>
    )
}
export default Recommendtext;