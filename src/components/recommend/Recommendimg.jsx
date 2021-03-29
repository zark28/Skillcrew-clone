import './Recommendimg.css';

const Recommendimg =(props)=>{
    return( 
        <div className='recommendimg'>
            <img src={props.rImg} alt={props.rAlt}/>
        </div>

    )
}

export default Recommendimg;