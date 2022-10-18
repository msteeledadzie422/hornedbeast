import { Component } from "react";
import HornedBeast from './HornedBeast.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beastList: this.props.beastList,
            searchBeastList: this.props.beastList
        }
    }

    handleForm = (e) => {
        if(e.target.value === "any"){
          this.setState({beastList: this.state.beastList, searchBeastList: this.props.beastList})
        }
        else{
            let hornCount = parseInt(e.target.value);
            let updateList = this.props.beastList.filter(beast => (beast.horns === hornCount))
            this.setState({beastList: this.state.beastList, searchBeastList: updateList})
          }
      }


    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Label>Filter by Number of Horns:</Form.Label>
                    <Form.Select onChange={this.handleForm} aria-label="2">
                        <option value="any">Select a number of horns</option>
                        {Array.from(new Set(this.state.searchBeastList.map(beast => beast.horns))).map(h => {
                            return <option key={h.toString()} value={h}>{h}</option>
                        })
                        }   
                        </Form.Select>
                </Form>
                <Row xs={1} sm={2}md={3} lg={4} xl={5}>
                    {this.state.searchBeastList.map(element =>
                        <Col>
                            <HornedBeast
                                title={element.title}
                                image_url={element.image_url}
                                description={element.description}
                                handleSelectedBeast={this.props.handleSelectedBeast}
                                 />
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default Main;