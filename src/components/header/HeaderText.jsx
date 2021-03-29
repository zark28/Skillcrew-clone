import Description from "./Description";
import Getstarted from "./Getstarted";
import Heading from "./Heading";
import './HeaderText.css';

const HeaderText = ()=>{
    return(
        <div className='header-text'>
            <Heading/>
            <Description/>
            <Getstarted/>
        </div>
    )
}

export default HeaderText;