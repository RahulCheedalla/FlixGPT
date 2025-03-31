import React from 'react'
import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/assets/hero_banner.jpg"
import hero_title from "../../assets/assets/hero_title.png"
import play_icon from "../../assets/assets/play_icon.png"
import info_icon from "../../assets/assets/info_icon.png"
import Title from '../../components/Title/Title'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className='hero-caption'>
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Discovering his ties to a secret ancieny order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className='hero-btns'>
                <button className='btn'><img src={play_icon} alt=""/>Play</button>
                <button className='btn dark-btn' src={info_icon} alt ="">More Info</button>
            </div>
              <Title/>
        </div>
      </div>
      <div className='mpre-cards'>
        <Title title={"BlockBuster Movies"} category={"top_rated"}/>
        <Title title={"Only on NetFlix"} category={"popular"}/>
        <Title title={"Upcoming"} category={"upcoming"}/>
        <Title title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
