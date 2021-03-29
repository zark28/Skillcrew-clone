
import Headerfooter from "../../components/header/Headerfooter";
import HeaderImg from "../../components/header/HeaderImg";
import HeaderText from "../../components/header/HeaderText";
import './Header.css';

const Header = ()=>{

    return(
        <>
            <header className='header'>
                <HeaderText/>
                <HeaderImg/>
            
             </header>
             <Headerfooter/>

        </>
    )
}

export default Header;