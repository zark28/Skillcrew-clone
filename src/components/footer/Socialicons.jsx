import Socialicon from './Socialicon'
import './Socialicons.css'

const Socialicons = () => {
    const iconsList =[
        {img:'google-plus.svg',alt:'google plus icon'},
        {img:'twitter.svg',alt:'twitter icon'},
        {img:'instagram.svg',alt:'instagram icon'},
        {img:'linkedin.svg',alt:'linkedin icon'}]
    return (
        <div className='socialicons'>
            {
                iconsList.map((icon,i)=>(
            <Socialicon key={i} icon={`icons/${icon.img}`} iconAlt={icon.alt}/>

                ))
            }
            
        </div>
    )
}

export default Socialicons
