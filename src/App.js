import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
//import './App.css';

const quotes = 
  {
    quote:"I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    character:"Homer Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection:"Right"
  }



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpsons: quotes
    }
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log('data :', data)
        this.setState({
          simpsons: data[0],
        });
    });
  }

    render() {
      return (
        <div>
          <button type="button" onClick={this.getQuotes}>Get a new quote</button>
          <QuoteCard simpsons={this.state.simpsons} />
          </div>
      );
    }
}




export default App;
