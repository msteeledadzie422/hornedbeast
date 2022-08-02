import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.currentTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='selected-beast' src={this.props.currentImg} alt={this.props.title} />
                    <p>{this.props.currentDescription}</p>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;