
import Productlist from './Productlist';
import './Productmain.css';
import Productnav from './Productnav';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Productlist2 from './Productlist2';
import Productlist3 from './Productlist3';
import Productlist4 from './Productlist4';
import Productlist5 from './Productlist5';



const Productmain=()=>{
    return(
        <section className='productmain'>
            
                <BrowserRouter>
                <Productnav/>
                    <Switch>
                        <Route path='/' exact component={Productlist}/>
                        <Route path='/list2'  component={Productlist2}/>
                        <Route path='/list3'  component={Productlist3}/>
                        <Route path='/list4'  component={Productlist4}/>
                        <Route path='/list5'  component={Productlist5}/>
                        
                    </Switch>
                </BrowserRouter>

        </section>
    )
}

export default Productmain;