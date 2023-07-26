import './Banner.css'
import image_1 from './image/pic-01.jpg'
import image_2 from './image/pic-3.jpg'
import image_3 from './image/pic-1.jpg'
import image_4 from './image/Pic-4.jpg'
import { useEffect, useState } from 'react'
 const Banner = () => {
    const imageSlide =[
        {url:`${image_1}`,
        title: 'Welcome to Lemlem School ',   
    },   
        {url:`${image_2}`,
        title: 'Lemlem School ',   
    },
    {url:`${image_3}`,
    title: 'Lemlem School'
},

    {url:`${image_4}`,
    title: 'Lemlem Kindergarten'
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
    },4000)
    return ()=> clearTimeout(timer)
   },[currentState])
   const bgImageStyle ={
   backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:'100%' 
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
                <div className='descriotion'>
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
   
    </div>
  )
}
export default Banner

