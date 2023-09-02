import React from 'react'
import './Managiment.css'
// import Banner from './Banner'

function Managiment() {
  return (
    <div className='school'>
         <div className='banner-aboutUs'> 
         </div>
     
         <div className='continer'>
         <img className='management'></img> 
            <div className='txt'>
            
              <h1>The school Management and the staff</h1>
                 <p>The school management strongly believes that the employees are the most important asset of the school. 
                    Hence it strives to ensure that the employees are fully supported by the management.
                    The school management works in harmony with all the school staffs and works 
                    hard to ensure all the employees are happy with their work, they are self-motivated 
                    and the working atmosphere is conducive.</p>
               </div>
               <div className="border_1"></div> 
                    <img className='image'></img> 
         </div>
    <div className='continer'>
         <img className='students'></img>
         <img className='school_manag'></img>
         <div className="border_2"></div> 

           <div className='txt'>
            
                <h1> The school management and the students</h1>
                  <p>The school management believes that the students are the bright future of our beautiful country Ethiopia.
                     The school works very hard to ensure that the students are provided with the quality education which will 
                     empower them to make the right choice.The school management encourages the students to participate actively
                     in the different non curricular clubs formed in the school. In addition to the regular class the school management has put a system in place in which the students are taught to develop their social skills so that they will contribute to the society.</p> 
                                   
             </div>
             
         </div>
    </div>
    
  )
}

export default Managiment