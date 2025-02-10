import React from 'react'
import './Slider.styles.css'

const Slider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

 <div className="hero-section" >
  <div className="herotext" ><h1>Plant Dekho</h1></div> 
<div className="subtext"  ><p>PlantDekho.com is your one-stop destination for lush, healthy plants! 🌿✨ <br/>
Explore a wide range of indoor and outdoor plants, perfect for adding greenery to your home or office. Whether you're a seasoned gardener or a beginner, we bring you the best selection with easy care tips. 🌱<br/>
 Shop now and bring nature closer to you!</p>
</div>
 </div>

    <div className="carousel-item active">
      <img src="https://i.ibb.co/Jsw2CmH/prudence-earl-Nw-Bx723-Xa-Hw-unsplash.jpg" className="d-block w-100 slider-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/mq3tgwH/ripon-kumar-saha-q-B7-Wdy-No-S5-A-unsplash.jpg" className="d-block w-100 slider-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/N95JHz3/thomas-verbruggen-5-A06-OWU6-Wuc-unsplash.jpg" className="d-block w-100 slider-img" alt="..."/>
    </div>



    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
