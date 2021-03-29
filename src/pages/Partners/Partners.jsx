import Partnercard from '../../components/partners/Partnercard';
import Partnerhead from '../../components/partners/Partnershead';
import './Partners.css';
const Partners = ()=>{
    return(
        <section className='partners'>
           <header>
                <Partnerhead/>
           </header>
          <main>
        <Partnercard
          pLogo='logos/netflix.svg'
          pAlt='Netflix Logo'/>


        <Partnercard
          pLogo='logos/slack.svg'
          pAlt='logo for slack'/>

        <Partnercard
          pLogo='logos/fitbit.svg'
          pAlt='fitbit logo'/>

        <Partnercard
          pLogo='logos/google.svg'
          pAlt='google logo'/>

        <Partnercard
          pLogo='logos/airbnb.svg'
          pAlt='airbnb logo'/>

        <Partnercard
          pLogo='logos/uber-12.svg'
          pAlt='uber logo'/>

          </main>
        </section>
    )
}

export default Partners;