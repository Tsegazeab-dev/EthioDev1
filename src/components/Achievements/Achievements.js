import React from 'react';
// import gown1 from '../../images/Achievements_images/IMG_20230704_103746_983.jpg'
import wancha1 from '../../images/Achievements_images/Wancha.jpeg'
import wancha2 from '../../images/Achievements_images/Wancha2.jpeg'
import gownpic1 from '../../images/Achievements_images/Screen Shot 2015-11-08 at 6.13.48 PM.png'
import gownpic2 from '../../images/Achievements_images/Screen Shot 2015-11-08 at 6.13.59 PM.png'
import T1 from '../../images/Achievements_images/Thumbnails/Group 2.png'
import T2 from '../../images/Achievements_images/Thumbnails/Group 3.png'
import T3 from '../../images/Achievements_images/Thumbnails/Group 4.png'
import T4 from '../../images/Achievements_images/Thumbnails/Group 5.png'
import Girls from '../../images/Achievements_images/IMG_20230704_100349_833.jpg'
import Building from '../../images/Achievements_images/IMG_20230704_103252_856.jpg'
import './Achievements.css'
function Achievements() {
    return (
       <body>
        
    <section >
        <div className="banner-achievement"></div>
    </section>

    <div className="Final-pic">
        <img src={wancha1} id= "A1"></img>
        <img src = {wancha2} id= "A2"></img>
    </div>


    <section className="Congratulations">
        <div className="Vertical-Line"></div>
        <div>
            <h2>Congratulations!!!</h2>
            <p>Lemlem is incredibly proud to announce that an astounding 99.9% of the students who have taken the national exam in the past five years have successfully passed with remarkable results. 
                This outstanding achievement demonstrates the unwavering commitment and dedication of our students, teachers, and the entire Lemlem community. 
                Together, we are shaping a bright and promising future for all our students
            </p>
        </div>
    </section>
    <section>
        
        <div className="Gown-Pic-Section">
            <img src={gownpic1} id="G1"></img>
            <img src={gownpic2} id="G2"></img>
        </div>
    </section>   
    <section className="Thumbnails">
        <div>
            <div>
                <div>
                <img src={T1}></img>
                <p>Quality education for minimal fee</p>
                </div>  
            </div>
            <div>
                <div>
                <img src={T2}></img>
                <p>Highest GEQAEA results in sub-city</p>
                </div>
                
            </div>
            <div>
                <div>
                <img src={T3}></img>
                <p>Strong relationship with Kebele/Woreda</p>
                </div>
            </div>
            <div>
                <div>
                <img src={T4}></img>
                <p>Participatory Parents</p>
                </div>
            </div>

            
        </div>
    </section>
    <section className="Girls-for-free">
        <p>To foster inclusion and diversity, we provide education  for needy female students on all 3 campuses - Addis Ababa, Axum and Adwa campuses.
        </p>
        <div className="Vertical-Line"></div>
        <img src={Girls}></img>

    </section>
    
    <section className="Building">
        <img src={Building}></img>
        <div className="Vertical-Line-Bottom"></div>
        <p>With your help, Lemlem School have managed to own G+3 building in the Addis Ababa Campus
        </p>
        
    </section>
       </body> )

}

export default Achievements