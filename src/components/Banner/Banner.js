// import './Banner.css'
// import imageSlide from './data'
// import { useEffect, useState } from 'react'
//  const Banner = () => {
//    const[currentState,setCurrentState]= useState(0) 
//    useEffect(()=>{
//     const timer = setTimeout(()=>{
//         if(currentState===2){
//             setCurrentState(0)
//         }else{
//             setCurrentState(currentState+1)
//         }
//     },2000)
//     return ()=> clearTimeout(timer)
//    },[currentState])
//    const bgImageStyle ={
//    backgroundImage: `url (${imageSlide[currentState].url})`,
//     backgroundPosition:'center',
//     backgroundSize:'cover',
//     height:'900px' 
//    }
//    const goToNext = (currentState)=>{
//     setCurrentState(currentState)
//    }
//   return (
   
//     <div className='countiner-style'>
//         <div style={bgImageStyle}>
//             <div className='transparent-background'>

//             </div>
//             <div className='descriotion'>
//                 <div>
//                     <h1>{imageSlide[currentState].title}</h1>
//                     <p>{imageSlide[currentState].body}</p>
//                 </div>
//                 <div className='carousel-boult'>
//                 {
//                    imageSlide.map((imageSlide,currentState)=>(
//                     <span key={currentState} onClick={()=>goToNext(currentState)}></span>
//                    )) 
//                 }
//                 </div>

//             </div>

//         </div>
   
//     </div>
//   )
// }
// export default Banner

