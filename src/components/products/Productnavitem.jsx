
import './Productnavitem.css';

const Productnavitem = (props)=>{
   
    
    return (
        <li className='productnavitem' style={{backgroundColor:props.navColor}} >
            <a href="/">
                {props.navItem}
                <img src="arrow_right.svg" alt="right arrow" />
            </a>
            
        </li>
    )
}

export default Productnavitem;