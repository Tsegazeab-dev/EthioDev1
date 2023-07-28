import './Banner.css'
import image_1 from './image/pic-01.jpg'
import image_2 from './image/pic-3.jpg'
import image_3 from './image/pic-1.jpg'
import image_4 from './image/Pic-4.jpg'
import { useEffect, useState } from 'react'
 const Banner = () => {
    const imageSlide =[
        {url:`${image_1}`,
        // title: 'Welcome to Lemlem School ',   
    },   
        {url:`${image_2}`,
        // title: 'Lemlem School ',   
    },
    {url:`${image_3}`,
    // title: 'Lemlem School'
},

    {url:`${image_4}`,
    // title: 'Lemlem Kindergarten'
}
    ]
   const[currentState,setCurrentState]= useState(0) 
   useEffect(()=>{
    const timer = setTimeout(()=>{
        if(currentState===3){
            setCurrentState(0)
        }else{
            setCurrentState(currentState+1)
        }
    },3000)
    return ()=> clearTimeout(timer)
   },[currentState])
   const bgImageStyle ={
   backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
     height:'500px', 
    // width:'700px'
   }
   const goToNext = (currentState)=>{
    setCurrentState(currentState)
   }
  return (
   
    <div className='countiner-style'>
        <div style={bgImageStyle}>
            {/* <div className='transparent-background'>

            </div> */}
            <div>
                <div className='describtion'>
                    <h1>{imageSlide[currentState].title}</h1>
                   
                </div>
                <div className='carousel-boult'>
                {
                   imageSlide.map((imageSlide,currentState)=>(
                    <span key={currentState} onClick={()=>goToNext(currentState)}></span>
                   )) 
                }
                </div>

            </div>

        </div>
        <div className='slayd_show'>
        <p>Lemlem school was established in 1996 the school has three campuses; in Addis Ababa, Axum, Adwa.
Currently the school has more than 153 teachers, administrative and line staff. They are dedicated in providing quality education in an environment which emphasize on self-discipline, academic excellence, creativity and pleasant social communications.
The school`s primary objective is to provide standardized and quality education to the nearby community with minimal fee and for free for those who cannot afford to pay the monthly fee. Currently, the school is rendering the service for very minimal fee. Moreover the school is teaching female students for free in three campuses.
Since its establishment the school has been gradually growing in size and in capital. The number of students was only 45 in the year of establishment and currently has increased to more than 1700 students. The quality of education and the service it provides has also been improved considerably through these years.
In addition, in collaboration with different NGOs and individuals the school has helped three students to get medical assistance abroad.  
</p>
        </div>
   
    </div>
  )
}
export default Banner

