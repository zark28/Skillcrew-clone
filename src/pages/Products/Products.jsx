import Producthead from '../../components/products/Producthead';
import Productmain from '../../components/products/Productmain';
import './Products.css';

const Products =()=>{
    return(
        <section className='products' >
            <Producthead/>
            <Productmain/>
        </section>
    )
}

export default Products;