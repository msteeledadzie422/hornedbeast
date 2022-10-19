import { Component } from 'react';


class HornedBeast extends Component {
      render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.imgUrl} alt={this.props.title}/>
            <p>{this.props.description}</p>
        </div>
    )}
}

export default HornedBeast;