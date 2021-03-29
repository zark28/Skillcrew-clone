import Recommendimg from '../../components/recommend/Recommendimg';
import Recommendtext from '../../components/recommend/Recommendtext';
import './Recommends.css';
const Recommends =()=>{
    return(
        <div className="recommend">
            <Recommendimg 
            rImg='recommend1.png'/>
            
            <Recommendtext 
            btnText='Get Started'/>
        </div>
    )
}
export default Recommends;