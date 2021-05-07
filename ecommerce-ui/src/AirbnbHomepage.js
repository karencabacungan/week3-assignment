import React from 'react';
import PropTypes from 'prop-types';
import airbnb_details from './airbnbs.json';
import AirbnbList from './AirbnbList';
import Cart from './AirbnbCart';

class Homepage extends React.Component {
    static propTypes = {
        airbnb_details: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                houseType: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                location: PropTypes.arrayOf(
                    PropTypes.shape({
                        city: PropTypes.string.isRequired,
                        country: PropTypes.string.isRequired,
                    })),
                payment: PropTypes.arrayOf(
                    PropTypes.shape({
                        cost: PropTypes.number.isRequired,
                        description: PropTypes.string.isRequired,
                    })),
                host: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.number.isRequired,
                        isSuperhost: PropTypes.bool.isRequired,
                    })),
                rating: PropTypes.arrayOf(
                    PropTypes.shape({
                        stars: PropTypes.number.isRequired,
                        reviews: PropTypes.number.isRequired,
                    })),
            })),
    }

    constructor(props) {
        super(props);
        this.state = {
            airbnb_details: airbnb_details,
            cartList: [],
            hide: true,
            new_airbnbs: {
                "title": '',
                "houseType": ' ',
                "image": ' ',
                "location": {
                    "city": ' ',
                    "country": ' '
                },
                "payment": {
                    "cost": ' ',
                    "description": ' '
                },
                "host": {
                    "name": ' ',
                    "isSuperhost": ' '
                },
                "rating": {
                    "stars": ' ',
                    "reviews": ' '
                },
            },
            showForm: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    handleClick(e, id) {
        let thisCardTitle = document.getElementById(id + "-title");
        let thisCardCost = document.getElementById(id + "-cost");
        let itemClicked = {
            "id": id,
            "title": thisCardTitle.innerText,
            "cost": thisCardCost.innerText
        }

        let itemAlreadyInCart = false;
        this.setState(prevState => {
            const cartList = prevState.cartList;
            cartList.forEach(item => {
                if (item.id === id) {
                    itemAlreadyInCart = true;
                }
            });
            if (!itemAlreadyInCart) {
                cartList.push(itemClicked);
            }
            return cartList;
        });

        this.setState({
            hide: false
        })
    }

    handleRemoveFromCart(e, item) {
        this.setState(prevState => {
            const cartList = prevState.cartList.filter(elm => elm.id !== item.id)
            return { cartList }
        });
    }

    addAirbnbs = (e) => {
        e.preventDefault();
        let formElem = e.target;
        let title = formElem.title.value;
        let houseType = formElem.houseType.value;
        let image = formElem.image.value;
        let city = formElem.city.value;
        let country = formElem.country.value;
        let cost = formElem.cost.value;
        let description = formElem.description.value;
        let name = formElem.name.value;

        let newCard = {
            "title": title,
            "houseType": houseType,
            "image": image,
            "location": {
                "city": city,
                "country": country
            },
            "payment": {
                "cost": cost,
                "description": description
            },
            "host": {
                "name": name,
            },
            "rating": {
                "stars": ' ',
                "reviews": ' '
            },
        };

        this.setState({
            airbnb_details: [...this.state.airbnb_details, newCard],
            new_airbnbs: {
                "title": '',
                "houseType": ' ',
                "image": ' ',
                "location": {
                    "city": ' ',
                    "country": ' '
                },
                "payment": {
                    "cost": ' ',
                    "description": ' '
                },
                "host": {
                    "name": ' ',
                },
                "rating": {
                    "stars": ' ',
                    "reviews": ' '
                },
            },
            showForm: false
        })
    }

    renderForm() {
        return (
            <div className="new-airbnb-form">
                <form onSubmit={this.addAirbnbs}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" name='title' placeholder='Rental Title' required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='houseType' placeholder='Rental Type' required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="url" name='image' placeholder='Rental Picture(s)' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='city' placeholder='City' required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='country' placeholder='Country' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='cost' placeholder='Rental Cost' required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='description' placeholder='Cancellation Fees' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name='name' placeholder='Host Name' required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Add Rental</button>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <hr></hr>
                <div className="main_page">
                    <i className="material-icons">house</i>
                    <h3 className="heading">Airbnb Rentals</h3>
                    <div>
                        <button className="host" onClick={() => this.setState({ showForm: true })}>Become a Host</button>
                        {this.state.showForm && this.renderForm()}
                    </div>
                </div>
                <hr />
                <div className="section">
                    <AirbnbList airbnb_details={this.state.airbnb_details} onClick={this.handleClick} />
                    {this.state.hide ? null : <div>
                        <Cart cartList={this.state.cartList} handleRemoveFromCart={this.handleRemoveFromCart} />
                    </div>}
                </div>
            </div>
        );
    }
}

export default Homepage;