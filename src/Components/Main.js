import { Component } from "react";
import list from '../data.json';
import HornedBeast from './HornedBeast.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            beastList: list,
        }
    }
    render() {
        return (
            <Container fluid>
                <Row xs={1} sm={2}md={3} lg={4} xl={5}>
                    {this.state.beastList.map(element =>
                        <Col>
                            <HornedBeast
                                title={element.title}
                                image_url={element.image_url}
                                description={element.description} />
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default Main;