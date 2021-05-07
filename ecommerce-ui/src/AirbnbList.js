import React from 'react';
import AirbnbPost from './AirbnbPost'

export default class AirbnbList extends React.Component {
    render() {
        const { airbnb_details } = this.props;
        return (
            <div className="home">
                {airbnb_details.map((card, idx) =>
                    <AirbnbPost card={card} id={"airbnb-card-" + idx} key={idx} onClick={this.props.onClick} />
                )}
            </div>
        );
    }
}