let order =[];

export const OrderItems = ( e )=> {
    let index = order.findIndex( element => element.id === e.target.dataset.id );
    if ( index === -1){
        let item = {
            id: e.target.dataset.id,
            item: e.target.dataset.item,
            price: e.target.dataset.price,
            quantity: 1,
        };

        order.push( item );
    }
    else{            
        order[index].quantity += 1;
    }

    console.log( order )

};