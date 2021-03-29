import React from 'react'
import Footnavitem from './Footnavitem';
import Footernavhead from './Footernavhead';
import './Footercards.css';


const Information = () => {
    const infoLists = ['Latest','For Business','API Documentation','Teach in SkillCrew','Download App']
    return (
        <ul className='footercard information'>
            <Footernavhead footNavHead='Information'/>
            {
                infoLists.map((infolist,i)=>(
            
            <Footnavitem key={i}navItem={infolist}/>
                ))

            }
            
            
        </ul>
    )
}

export default Information
