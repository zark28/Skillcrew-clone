import './Logo.css';
import {Link, animateScroll as scroll} from 'react-scroll';

const Logo = ()=>{
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return(
        <Link className='logo' onClick={scrollToTop}>
            <img src="ImageP.svg" alt=""/>
            SkillCrew
        </Link>
    )
}

export default Logo;