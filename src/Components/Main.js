import { Component } from "react";
import list from '../data.json';
import HornedBeast from './HornedBeast.js';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            beastList: list,
        }
    }
    render() {
        return (
            <div id='main'>
                {this.state.list.map(element =>
                    <HornedBeast
                        title={element.title}
                        image-url={element.image_url}
                        description={element.description} />
                    )}
            </div>
        )
    }
}

export default Main;