import { OrderItems } from "../components/OrderItems";


export const MenuGrid = ( { id, item, price, img }) => {
    
    return(  

        <div className="card" key = { item }>
            <img src= { img } alt= "" className= " wrapper-img"></img>
            <div className="card-body">
                <h5 className="card-title" > { item } </h5>
                <h4 className="card-text"> { price } $ </h4>
                <button 
                    className="btn btn-danger btn-sm" 
                    onClick= { OrderItems } 
                    data-item = { item } 
                    data-price = { price }
                    data-id = { id }
                    > 
                        Agregar 
                </button>
            </div>
        </div>
      
    )
};

