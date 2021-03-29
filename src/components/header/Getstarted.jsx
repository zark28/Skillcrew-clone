import './Getstarted.css';
import Button from "../../utilities/Button/Button"

const Getstarted = () =>{
    return(
        <div className='get-started-card'>
            <span>
            <p>What you Want Learn Today?</p>
            <h3>Learn UI/UX Desi</h3>
            </span>
            <Button text='Get Started'/>

        </div>
    )
}

export default Getstarted;