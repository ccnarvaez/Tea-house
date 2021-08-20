import { useState } from "react";
import { Menu } from "../components/Menu";



export const Home = () => {
    const [  menu, setMenu ] = useState([]);

    const handleMenu = () => {

        setMenu( () => {
            return (
                <div> <Menu /> </div>
            )   
        })
    };

    return (
        <>
            <h1 className = "animate__animated animate__rubberBand"> Tea house </h1>
            <h2 className = "animate__animated animate__rubberBand" > Elige lo que quieres hacer </h2>
            
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <button onClick = { handleMenu } className="btn btn-success btn-lg"> Crear orden </button>
                <button className="btn btn-warning btn-lg"> Cocina </button>
            </div>
            <hr></hr>
            
            <div> { menu } </div>
        
          
        </>

    )
}