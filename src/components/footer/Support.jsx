import React from 'react'
import Footernavitem from './Footnavitem';
import Footernavhead from './Footernavhead';
import './Footercards.css';



const Support = () => {
    const supportLists =['FAQ','Help Center','Sitemap','Careers']
    return (
        <ul className='footercard support'>
            <Footernavhead footNavHead='Support'/>
            {
                supportLists.map((supportList,i)=>(

            <Footernavitem key={i} navItem={supportList}/>

                ))
            }
            
        </ul>
    )
}

export default Support;
;