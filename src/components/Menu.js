import { data } from "../data/menu";
import { MenuGrid } from "../views/MenuGrid";
import { useState } from "react";




export const Menu = () => {


    const [order, setOrder] = useState([]);
    
   

    return(
    <>

        <div className = "wrapper"> 
            { data.map( elem => (

                <MenuGrid id= {elem.id} item = { elem.item } price = { elem.price } img = { elem.img} />

            ))};
        </div> 

        <div> { order } </div>
          
    </>
    )
};

