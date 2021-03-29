
import './App.css';
import Footer from './pages/Footer/Footer';
import Founders from './pages/Founders/Founders';
import Header from './pages/Header/Header';
import Nav from './pages/Nav/Nav';
import Partners from './pages/Partners/Partners';
import Products from './pages/Products/Products';
import Recommends from './pages/Recommend/Recommends'

function App() {
  return (
    <section className="App">
        <div className='headsection'>
        <Nav/>
    <Header/>
        </div>
    <main>
      <Products/>
      <Partners/>
      <Founders/>
      <Recommends/>
    </main>
    <Footer/>
   
    </section>
  );
}

export default App;
