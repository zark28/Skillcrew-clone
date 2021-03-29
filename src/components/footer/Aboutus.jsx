import React from 'react'
import Footnavitem from './Footnavitem';
import Footernavhead from './Footernavhead';
import './Footercards.css';


const Aboutus = () => {
    const aboutLists = ['About Company','Terms and Conditions','Privacy Policy','Referral Program','IBW 2020']

    return (
        <ul className='footercard aboutus'>
            <Footernavhead footNavHead='About Us'/>
        {
            aboutLists.map((aboutList,i)=>(
                
                <Footnavitem key={i} navItem={aboutList}/>
            
            ))
        }
        </ul>
    )
}

export default Aboutus
