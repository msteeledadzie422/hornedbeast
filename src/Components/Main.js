import { Component } from "react";
import Pronghorn from '../images/Pronghorn';
import Ram from '..images/Ram';

class Main extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <main>
                <h2>Horned Beast 1</h2>
                <img src={Pronghorn} title="Pronghorn" alt="Pronghorn Image" />
                <p>Website URL: https://43r51g20njn91yyrp83hvkqu-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Pronghorn-Divider-2-revised.png</p>
                <p>Colorado Pronghorn!!!!!</p>
                <h2>Horned Beast 2</h2>
                <img src={Ram} title="Ram" alt="Ram Image" />
                <p>Website URL: https://i0.wp.com/coloradooutdoorsmag.com/wp-content/uploads/2018/11/DSC01073.jpg?resize=800%2C531&ssl=1</p>
                <p>Technically a Colorado Bighorn Sheep</p>
            </main>
        )
    }
}

export default Main;