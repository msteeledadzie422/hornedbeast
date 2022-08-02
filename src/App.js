import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import list from './data.json';
import SelectedBeast from './Components/SelectedBeast'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTitle: null,
      currentImg: null,
      currentDescription: null,
      showModal: false
    }
  }

  handleClose = () => this.setState({showModal: false});

  handleSelectedBeast = (beast) => {
    this.setState({
      currentTitle: beast.props.title, 
      currentImg: beast.props.image_url, 
      currentDescription: beast.props.description, 
      showModal: true})
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast 
          currentTitle={this.state.currentTitle} 
          currentImg={this.state.currentImg} 
          currentDescription={this.state.currentDescription} 
          show={this.state.showModal}
          close={this.handleClose} />
        <Main handleSelectedBeast={this.handleSelectedBeast} beastList={list}/>
        <Footer />    
      </div>
    );
  }
}

export default App;