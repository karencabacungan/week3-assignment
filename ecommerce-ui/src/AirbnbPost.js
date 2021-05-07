import React from 'react';

export default class AirbnbCard extends React.Component {
    render() {
        const description = this.props.card.payment.description;
        const isSuperhost = this.props.card.host.isSuperhost;

        return (
            <div className="each-card" id={this.props.id}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                {(this.props.card.image.length > 0) ?
                    (<img className="image" src={this.props.card.image} alt="rental" />) :
                    (<img className="image" src="https://previews.123rf.com/images/iimages/iimages1205/iimages120500876/13732734-illustration-a-simple-house-front-view.jpg" alt="rental" />)}
                <div className="card-text">
                    <div>
                        <p className="house-type">{this.props.card.houseType} in {this.props.card.location.city}, {this.props.card.location.country}</p>
                        <h2 id={this.props.id + "-title"}>{this.props.card.title}</h2>
                    </div>
                    <div className="house-cost">
                        {description ? (<p>$<em id={this.props.id + "-cost"}>{this.props.card.payment.cost}</em>, {description}</p>) : (<p>$<em id={this.props.id + "-cost"}>{this.props.card.payment.cost}</em></p>)}
                    </div>
                    <div className="additional-details">
                        <div>
                            {(this.props.card.rating.reviews > 0) ? (<p><i className="material-icons">star</i>  {this.props.card.rating.stars} ({this.props.card.rating.reviews})</p>) : null}
                        </div>
                        <p><i className="material-icons">person</i>
                            {isSuperhost ? (<em>{this.props.card.host.name} (Superhost)</em>) : (<em>{this.props.card.host.name}</em>)}</p>
                        <div>
                            <button className="cart" onClick={(e) => this.props.onClick(e, this.props.id)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}