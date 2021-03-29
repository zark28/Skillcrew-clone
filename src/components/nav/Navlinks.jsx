import Navlink from "./Navlink"
import './Navlinks.css'
import {Link} from 'react-scroll'


const Navlinks = ()=>{

    return(
        <ul className='navlinks'>
            <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={80}
            duration={500}>

                <Navlink link='All Classes'/>

            </Link>
           
            <Link
            activeClass="active"
            to="recommend"
            spy={true}
            smooth={true}
            offset={-120}
            duration={700}>
                
                <Navlink link='Recommended Class'/>

            </Link>
            <Link
            activeClass="active"
            to="founders"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}>
                
                <Navlink link='Student Projects'/>

            </Link>

            <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}>
                
                <Navlink link='Groups'/>

            </Link>

        </ul>
    )
}

export default Navlinks;