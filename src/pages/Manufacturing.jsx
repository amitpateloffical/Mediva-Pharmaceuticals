import React from 'react'
import "./Home.css";
const Manufacturing = () => {
    return (
        <div className=''>
       <div className='Manufacturing-head'>   
         <h1 className='manufacturing-heading'>Manufacturing</h1>
     </div>

     <div className="container-fluid p-5 hero-header mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className=" " >
              <div className="">
                <img width="1200px" className="img-fluid" src="https://media.istockphoto.com/id/1309776504/photo/female-research-scientist-with-bioengineer-working-on-a-personal-computer-with-screen-showing.jpg?s=612x612&w=0&k=20&c=FBI79EWdoWHailbTGvQWBBYOiOfx7owZLWuNnQxuDqo=" />
              </div>
            </div>
            <div
            
            >
              {/* <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div> */}
              <h1 className="Manu-about">At Mediva Pharma we are passionate about every product we deliver to our customers</h1>
              <p className="Manu-para">"Our commitment to manufacturing excellence ensures that patients and healthcare
               professionals can trust in the safety and efficacy of every product bearing the Mediva Pharma name.
                We are proud to be at the forefront of the pharmaceutical manufacturing industry,
               delivering high-quality medicines that make a difference in people's lives."</p>


            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Manufacturing