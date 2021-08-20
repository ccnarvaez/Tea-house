import { data } from "../data/menu";
import { MenuGrid } from "../views/MenuGrid";



export const Menu = () => {

    return(

        <div className = "wrapper"> 
            { data.map( elem => (

                <MenuGrid id= {elem.id} item = { elem.item } price = { elem.price } img = { elem.img} />

            ))};
        </div> 
    )
};

