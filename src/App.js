//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import FriendCard from "./components/friendcard";
import Footer from "./components/footer";
import park from "./park.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    park,
    clickedPark: [],
    score: 0
  };

//when you click on a card ... the park is taken out of the array
  imageClick = event => {
    const currentPark = event.target.alt;
    const ParkAlreadyClicked =
      this.state.clickedPark.indexOf(currentPark) > -1;

//if you click on a park that has already been selected, the game is reset and cards reordered
    if (ParkAlreadyClicked) {
      this.setState({
        park: this.state.park.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPark: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available park, your score is increased and cards reordered
    } else {
      this.setState(
        {
          park: this.state.park.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPark: this.state.clickedPark.concat(
            currentPark
          ),
          score: this.state.score + 1
        },
//if you get all 12 park corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              park: this.state.park.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPark: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.park.map(park => (
            <FriendCard
              imageClick={this.imageClick}
              id={park.id}
              key={park.id}
              image={park.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
