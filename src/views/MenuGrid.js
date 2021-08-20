


export const MenuGrid = ( { id, item, price, img }) => {

    const SaveItems = (e) => {


        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> {e.target.dataset.item} </h5>
                    <h6 class="card-subtitle mb-2 text-muted"> {e.target.dataset.item} </h6>
                    <input></input>
                </div>
            </div>
        )
    
    };

  

    return(  

        <div className="card" key = { id }>
            <img src= { img } alt= "" className= " wrapper-img"></img>
            <div className="card-body">
                <h5 className="card-title" > { item } </h5>
                <h4 className="card-text"> { price } $ </h4>
                <button 
                    className="btn btn-danger btn-sm" 
                    onClick= { SaveItems  } 
                    data-item = { item } 
                    data-price = { price }> 
                        Agregar 
                </button>
            </div>
        </div>
      
    )
};

