import './Socialicon.css'

const Socialicon = (props) => {
    return (
        <div className='socialicon'>
            <img src={props.icon} alt={props.iconAlt}/>
        </div>
    )
}

export default Socialicon;
