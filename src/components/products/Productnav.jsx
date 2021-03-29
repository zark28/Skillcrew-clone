import { NavLink } from 'react-router-dom';
import './Productnav.css';
import Productnavitem from './Productnavitem';


const Productnav = ()=>{
    return (
        <ul className='productnav'>
            
            <NavLink exact to='/'activeClassName='activeNav'><Productnavitem navItem='Design' navColor='var(--navColor1)'/> </NavLink>
            <NavLink to='/list2' activeClassName='activeNav'><Productnavitem navItem='Developments' navColor='var(--navColor2)'/></NavLink>
            <NavLink to='/list3' activeClassName='activeNav'><Productnavitem navItem='Marketing' navColor='var(--navColor3)'/></NavLink>
            <NavLink to='/list4' activeClassName='activeNav'><Productnavitem navItem='IT & Software' navColor='var(--navColor4)'/></NavLink>
            <NavLink to='/list5' activeClassName='activeNav'><Productnavitem navItem='Business' navColor='var(--navColor5)'/></NavLink>
        </ul>
    )
}

export default Productnav;