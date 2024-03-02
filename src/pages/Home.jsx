import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
function Home() {

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="slider-container p-4">
        <MySlider />
      </div>
      <div className="container-fluid p-5 hero-header mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="">
                <img className="img-fluid" src="https://media.istockphoto.com/id/1309776504/photo/female-research-scientist-with-bioengineer-working-on-a-personal-computer-with-screen-showing.jpg?s=612x612&w=0&k=20&c=FBI79EWdoWHailbTGvQWBBYOiOfx7owZLWuNnQxuDqo=" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div>
              <h1 className="heading-about">Clear Strategy, Consistent Performance</h1>
              <p className="home-para">"Driven by our passion for advancing medical science and improving patient
                outcomes, we continuously invest in research and development to
                bring new and groundbreaking treatments to market"</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5  hero-header mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                Manufacturing
              </div>
              <h1 className="heading-about">Providing Quality Products</h1>
              <p className="home-para">"At Mediva Pharmaceuticals , we believe that quality is the cornerstone of every
                product we deliver. Our state-of-the-art manufacturing facilities are equipped
                with cutting-edge technology and adhere to the highest international
                standards to ensure the safety, purity,
                and effectiveness of our pharmaceutical products.."</p>

            </div>
            <div className="wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">

              <img className="img-fluid" src="https://media.istockphoto.com/id/1212392754/photo/scientist-works-with-petri-dishes-with-various-bacteria-tissue-and-blood-samples-concept-of.jpg?s=612x612&w=0&k=20&c=CLcKr82Sq-gA0vPIywY5XylI7bTYT1h86Z4Oc5hqwUE=" />

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5 hero-header mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="">
                <img className="img-fluid" src="https://media.istockphoto.com/id/997784670/photo/pharma-logistician-using-iot-based-on-blockchain.jpg?s=612x612&w=0&k=20&c=mDTYaUEB4laXzb6AQGeHs12liZu-denwznwIgTlIDh8=" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Research & Development
              </div>
              <h1 className="heading-about">The Innovation Edge</h1>
              <p className="home-para">" we are committed to advancing the boundaries of medical science
                and improving healthcare outcomes through innovative research and development.
                Our state-of-the-art laboratories and dedicated team of scientists and researchers
                work tirelessly to discover and develop
                groundbreaking medicines that address unmet medical needs."</p>

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5  hero-header mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                About Us
              </div>
              <h1 className="heading-about">Clear Strategy, Consistent Performance</h1>
              <p className="home-para"> "Welcome to Mediva Pharmaceuticals, where our mission is to revolutionize healthcare through innovative,
                life-changing medicines. As a global leader in pharmaceuticals,
                we specialize in developing cutting-edge treatments for a wide range of medical conditions.
                Our commitment to excellence drives us to consistently deliver safe, effective,
                and affordable solutions that improve patient outcomes and enhance quality of life.
                Backed by a team of dedicated scientists, researchers, and healthcare professionals,
                we strive to make a meaningful impact on the world by pushing the boundaries
                of medical science and improving access to healthcare for all."</p>

            </div>
            <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="fade-right">

              <img className="img-fluid" height={"344px"} width={"612px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVdBgChoX8FO4cd2EFWKcB8FCPKMVjYSr4g&usqp=CAU" />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
