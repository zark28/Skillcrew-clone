import Aboutus from '../../components/footer/Aboutus';
import Information from '../../components/footer/Information';
import More from '../../components/footer/More';
import Socials from '../../components/footer/Socials';
import Support from '../../components/footer/Support';
import './Footer.css';

const Footer =()=>{
    return(
        <footer className='footer'>
            <Socials/>
            <Information/>
            <Aboutus/>
            <Support/>
            <More/>
            
        </footer>
    )
}

export default Footer;