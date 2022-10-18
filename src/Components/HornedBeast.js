import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {

  constructor(){
    super();
    this.state = {
      votes: 0,
    }
  }

  handleClick = (e) => {
    this.setState({votes: this.state.votes + 1});
  }

  handleSelectedBeast = (e) => {
    this.props.handleSelectedBeast(this);
  }

  render() {
    return(
      <Card onClick={this.handleSelectedBeast} style={{ width: '20rem'}}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Current Votes: {this.state.votes}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>&hearts; Vote Here</Button>
          <Button variant="primary" onClick={this.handleSelectedBeast}>&hearts; Expand</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;