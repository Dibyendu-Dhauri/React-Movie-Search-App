import React from 'react'



export default function MovieList(props) {


let box = document.querySelector('.movies')
const nextClick = ()=> {
  
let width = box.clientWidth;
box.scrollLeft = box.scrollLeft + width

}
const prevClick = ()=> {
let width = box.clientWidth;
box.scrollLeft = box.scrollLeft - width
}
  return (
      <>
      <button className='nextBtn'onClick={nextClick}><p>&gt;</p></button>
      <button className='prevBtn' onClick={prevClick}><p>&lt;</p></button>

      <div className='movies'>

     {
        props.movies.map((movie,index)=> (
            <div className='movie' key={index}>
              

                <img src={movie.Poster} alt="movie"></img>
              
               
            </div>
            
        ))
     }
      </div>
    </>
  )
}
