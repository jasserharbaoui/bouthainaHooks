import { useNavigate, useParams } from "react-router-dom"
import React from "react";




    const Deatails = ({film})=>{
        console.log(film);
         const {id} = useParams();
         console.log(id);
         const navigate =useNavigate();
        
        let singleMovie = film.find((el)=> el.id === Number(id))
        console.log(singleMovie);
   
    return(
        <div>
            <button onClick={()=>navigate('/')}>back home</button>
          <h4> description :{singleMovie.description}</h4>
          <iframe src={singleMovie.trailer}
          title="trailer"
           width="560"
           height="315"
           allowFullScreen></iframe>
        </div>
    )

    
}
export default Deatails