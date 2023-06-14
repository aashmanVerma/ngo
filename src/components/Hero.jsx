import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";



export default function Hero() {
  return (
    <div className="w-[85%] mx-auto flex flex-col md:flex-row md:justify-between my-[6rem] items-center">
      <div className="md:w-[50%]">
        {/* <img src={Img1} alt="" className='w-[18rem] sm:w-[25rem] md:w-[28rem]' /> */}
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="mt-5 md:w-[45%]">
        <div className="mx-auto">
          <i className="text-base font-medium block md:text-lg lg:text-xl">
            Empowering Lives, Building Hope: Together for a Better World
          </i>
          <i className="text-sm md:text-base block lg:text-lg mt-4 sm:mt-5">
            To Promotion of education and Eradication of extreme hunger and
            poverty and help to poor and needy people and work for social
            development. To promotion of commerce, art, science, sports,
            education, research, social welfare, religion, charity, protection
            of environment or any such other object.
          </i>
          <button className="px-2 text-white py-1 rounded bg-green-500 mt-3">
            <a href="">More info</a>
          </button>
        </div>
      </div>
    </div>
  );
}
