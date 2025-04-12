import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquees from './components/Marquees'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Start from './components/Start'

function App() {

  const locomotivescroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-[#004d43] text-black' >
      <Navbar />
      <Landing />
      <Marquees />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Start />
      <Footer />
    </div >
  )
}

export default App
