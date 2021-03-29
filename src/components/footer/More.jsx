import React from 'react'
import Footnavitem from './Footnavitem';
import Footernavhead from './Footernavhead';
import './Footercards.css';




const More = () => {
    const moreLists = ['Documentation','License','Changelog']
    return (
        <ul className='footercard more'>
            <Footernavhead footNavHead='More'/>

            {
                moreLists.map((moreList ,i)=>(
                    <Footnavitem
                    key={i}
                    navItem={moreList}/>
                ))
            }
            
        </ul>
    )
}

export default More
