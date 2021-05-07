import React from 'react';

export default class Cart extends React.Component {
    render() {
        const {cartList} = this.props;
        
        return (
            <div>
                <h2>Rental Cart</h2>
                {cartList.length===0 ? "Cart is empty" : <div>  {cartList.length} Rental(s)</div>}
                {cartList.length> 0 &&
                    <div>
                        <ul>
                            {cartList.map((item, key) =>
                            <li key={key}>
                                <b>{item.title}: ${item.cost}</b> <button className= "RemoveCart" onClick={(e) => this.props.handleRemoveFromCart(e,item)}>Remove</button>
                            </li>
                            )}
                        </ul>
                        Total: ${cartList.reduce((a,c) => parseFloat(a) + parseFloat(c.cost), 0)} 
                    </div>
                }
            </div>          
        );
    }
}