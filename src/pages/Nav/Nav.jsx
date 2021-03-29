import Logo from "../../components/nav/Logo"
import Navlinks from "../../components/nav/Navlinks"
import "./Nav.css";

const Nav =()=>{
    return(
        <nav className='nav'>
            <Logo/>
            <Navlinks/>
        </nav>

    )
}

export default Nav;