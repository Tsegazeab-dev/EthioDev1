import React from "react";
// import Content from "./Readmore";
import Mycomponent from "./Mycomponent";
import "./bootstrap.css";
import "./Homepage.css";
import Banner from "../Banner/Banner";

// import ReactCurvedText from "react-curved-text";
import { useState } from "react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 670) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};
function HomePage() {
  return (
    <div>
      <section className="home-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <Banner />
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">WELCOME TO </div>
                <Mycomponent />
                <div className="container-fluid">
                  <p className="background">
                    <ReadMore>
                          Lemlem school was established in 1996.  Currently
                          the school has more than 153 teaching and administrative staff. They are dedicated in providing
                          quality education in an environment which emphasize on
                          self discipline, academic excellence, creative and
                          pleasant social communications. The school's primary
                          objective is to provide standardized and quality
                          education to the nearby community with minimal fee. Since its
                          establishment the school has been gradually growing in
                          size and in capital. The number of students was only
                          in the year of establishment and currently has
                          increased to more tha 1700 students. The quality of
                          education and service it provides has also been
                          improved considerably through these years. In addition, the school maintains an enduring partnerships with both governmental and non-governmental institutions with the aim of enhancing the quality of education offered to students. These connections provide the school with access to valuable resources, expertise, networking opportunities, and advocacy efforts, which can greatly contribute to the improvement of the educational experience for students.                     
                       
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home2-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div class="vertical-vission"></div>
              <div className="left-side-container">
                <ul className="">
                  <li>
                    <h2 className="Vission">VISION</h2>
                    <h4 className="pback">
                      Our Vission is to offer young children an advanced
                      education related with scientific and technological
                      development which takes the nation's demand, social and
                      cultural aspects account. We strive to produce confident
                      and hardworking citizens.
                    </h4>
                  </li>
                  <div class="vertical-mission"></div>
                  <li>
                    <h2 className="Mission">MISSION</h2>
                    <h4 className="pback">
                    Equipping students with the necessary skills and knowledge to succeed in their future pursuits, whether it be in higher education or in their professional endeavors.
                    Working to improve the system of the teaching and learning activity and relate it with modern technology.<br/> 
                    Work to produce a democratic, independent and confident
                    citizen.
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="flexx">
        {/* <div class="vertical-row2"></div> */}
        <div>
          <h2 className="Objectve"> OBJECTIVE</h2>
          <h4 class="pbacko">
            Working to meet the demand of the government socity and parents in
            order to build capable citizens, who keep their promises identify
            and recognize Ethiopia's beauty, unity and history.
          </h4>
        </div>
        {/* <div class="vertical-row3"></div> */}
      </section>
    </div>
  );
}
export default HomePage;
