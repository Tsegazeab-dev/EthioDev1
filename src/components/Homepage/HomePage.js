import React from "react";
import Content from "./Readmore";
import Mycomponent from "./Mycomponent";
import "./bootstrap.css";
import "./Homepage.css";

// import ReactCurvedText from "react-curved-text";

function HomePage() {
  return (
    <div>
      <section className="home-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container"></div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">WELCOME TO </div>
                <Mycomponent />
                <div class="vertical-row"></div>
                <Content />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home2-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div class="vertical-mission"></div>
              <div className="left-side-container">
                <ul className="vission">
                  <li>
                    <h2 className="Mission">VISSION</h2>
                    <h4 className="pback">
                      Our Vission is to offer young chldren an advanced
                      education related with scintific and technological
                      development which takes the nation's demand, social and
                      cultural aspects acount. We strive to produce confident
                      and hardworking citizens
                    </h4>
                  </li>
                  <div class="vertical-mission"></div>
                  <li>
                    <h2 className="Mission">MISSION</h2>
                    <h4 className="pback">
                      To give quality education and fuide students to be
                      creative, competent and capable of problem solving To
                      provide the required knowlodge to enable students pass
                      successfully the national exams prepaire studentsenter the
                      university. Working to improve the systemof he learning
                      and teaching activity and relate it with model technology
                      Work to produce a democratic, independent and confident
                      sitizen.
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
        <div class="vertical-row2"></div>
        <div>
          <h2 className="Objectve"> OBJECTIVE</h2>
          <h4 class="pbacko">
            Working to meet the demand of the government socity and parents in
            order to build capable citizens, who keep their promises identify
            and recognize Ethiopia's beauty, unity and history.
          </h4>
        </div>
        <div class="vertical-row3"></div>
      </section>
    </div>
  );
}
export default HomePage;
