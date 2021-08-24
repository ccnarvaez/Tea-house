let order = [];
    const SaveItems = ( e )=> {
        let index = order.findIndex( element => element.id === e.target.dataset.id );
        if ( index === -1){
            let item = {
                id: e.target.dataset.id,
                nombre: e.target.dataset.item,
                precio: e.target.dataset.price,
                cantidad: 1,
            };

            order.push( item );
        }
        else{            
            order[index].cantidad += 1;
        }
    
        
        console.log(order);

        // return (
            
        //     <div class="card">
        //         <div class="card-body">
        //             <h5 class="card-title"> {e.target.dataset.item} </h5>
        //             <h6 class="card-subtitle mb-2 text-muted"> {e.target.dataset.item} </h6>
        //             <input></input>
        //         </div>
        //     </div>
        // )
    
    };


export const MenuGrid = ( { id, item, price, img }) => {
    
    return(  

        <div className="card" key = { id }>
            <img src= { img } alt= "" className= " wrapper-img"></img>
            <div className="card-body">
                <h5 className="card-title" > { item } </h5>
                <h4 className="card-text"> { price } $ </h4>
                <button 
                    className="btn btn-danger btn-sm" 
                    onClick= { SaveItems } 
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

