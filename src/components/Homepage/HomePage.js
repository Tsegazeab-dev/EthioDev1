import React from "react";
import Content from "./Readmore";
import Mycomponent from "./Mycomponent";
import ReactCurvedText from "react-curved-text";

function HomePage() {
  return (
    <div>
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">Head Office of the School</div>

                <div className="links-wrapper"></div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">Wellcome to </div>
                <Mycomponent />
                <Content />
                {/* <a
                  href="#"
                  class="trend-w3l"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <span>Read More</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                {/* <div className="title-wraper">MISSION & VISION</div> */}
                <ul className="vission">
                  <li>
                    <h2 className="Mission">VISION</h2>
                    <p className="pback">
                      Our Vission is to offer young chldren an advanced
                      education related with scintific and technological
                      development which takes the nation's demand, social and
                      cultural aspects acount. We strive to produce confident
                      and hardworking citizens
                    </p>
                  </li>
                  <li>
                    <h2 className="Mission">MISSION</h2>
                    <p className="pback">
                      To give quality education and fuide students to be
                      creative, competent and capable of problem solving To
                      provide the required knowlodge to enable students pass
                      successfully the national exams prepaire studentsenter the
                      university. Working to improve the systemof he learning
                      and teaching activity and relate it with model technology
                      Work to produce a democratic, independent and confident
                      sitizen.
                    </p>
                  </li>
                  <li>
                    <h2 className="Objectve"> Objective</h2>
                    <p className="pback">
                      Working to meet the demand of the government socity and
                      parents in order to build capable citizens, who keep their
                      promises identify and recognize Ethiopia's beauty, unity
                      and history.
                    </p>
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
    </div>
  );
}
export default HomePage;
