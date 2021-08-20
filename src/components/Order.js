import { MenuGrid } from "../views/MenuGrid";



export const Order = () => {
    const date = new Date();
        const whatTime = date.toLocaleTimeString();

    

    return(

        <>
            <div> {whatTime} </div>
            <p> <MenuGrid /> </p>
        </>
    )
}