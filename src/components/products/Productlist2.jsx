import './Productlist.css';
import Productlistcard from '../../utilities/Productcard/Productlistcard';

const Productlist2 =()=>{
    return(
        <div className='productlist'>
           
            <Productlistcard
            cardImg='/motion-graphics.jpg'
            cardHeader='Motion Graphics Using Adope After Effects'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐ (48)`}/>


            <Productlistcard
            cardImg='/external-arch.jpg'
            cardHeader='Exterior Design From Stratch to Digitalize'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐ (48)`}/>



            <Productlistcard
            cardImg='/packaging.jpg'
            cardHeader='Upgrade Your Product Level With Packaging'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐ (48)`}/>

            
            <Productlistcard
            cardImg='/arch.jpg'
            cardHeader='Architecture Modelling Using Revit'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐  (48)`}/>

            <Productlistcard
            cardImg='/illustration.jpg'
            cardHeader='Illustrator Complete: From Zero to Hero'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐ (48)`}/>
            

            <Productlistcard
            cardImg='/book-design.jpg'
            cardHeader='Create Your First Book Using Adobe InDesign'
            cardText='Rudi Choirul Taher'
            cardRate={`3.0 ⭐ ⭐ ⭐ (48)`}/>

        </div>
    )
}

export default Productlist2;