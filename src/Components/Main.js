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
                {this.state.list.map(n =>
                    <HornedBeast
                        title={navigator.title}
                        image-url={navigator.image_url}
                        description={navigator.description} />
                    )}
            </div>
        )
    }
}

export default Main;