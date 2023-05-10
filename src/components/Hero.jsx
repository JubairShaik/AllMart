import "./Header.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import { Link } from "react-router-dom";
import Img13 from "../img/products/13.jpg";
import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";


function Hero() {
  return (
    <>
      <motion.div 
      variants={navVariants}
      initial= "hidden" 
      whileInView="show"
      className="home-container ">
        <div className="container">


          <div className="grid-container">
            <div 
            
            className="featured grayscale-0  grid-one">
              <Link to="categories/groceries">
                <div id="img1" className="lil-overlay"></div>
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/16/supermarket-trolley-groceries.jpg?quality=50&width=640&auto=webp" alt="img3" />
            
                <p className="main-description  font-space ">GROCERY & STAPLES</p>
              </Link>
            </div>



            <div className="featured grid-two">
              <Link to="categories/dairy">
                <div id="img2" className="lil-overlay"></div>
                <img src="https://shriandsam.files.wordpress.com/2018/10/207f483c5a4729eddd5a7eb41cacf80d.jpg?w=768" alt="img1" />
                <p className="  main-description capitalize ">HOME ESSENSIALS</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img src="https://tse3.mm.bing.net/th?id=OIP.G0WF1hoNLhe-lVdknOY7vQHaFn&pid=Api&P=0" alt="img3" />
                <p className="main-description">DAIRY & FROZEN</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/fruits">
                <div id="img4" className="lil-overlay"></div>
                <img src=" https://c4.wallpaperflare.com/wallpaper/537/587/711/fruits-pomegranate-free-images-wallpaper-preview.jpg " alt="img4" />
                <p className="main-description">Fruits</p>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
     
    </>
  );
}

export default Hero;
