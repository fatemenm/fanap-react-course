import React from "react";
import CardList from "./components/CardList";
import "./components/index.css";
import data from "./data/data";
import CardDetail from "./components/CardDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    data,
    selectedCard:null
    //  {
    //   id: 1,
    //   title:
    //     "Magna velit culpa tempor commodo sit elit esse consectetur elit incididunt cupidatat laborum officia proident. 1",
    //   author: "qui est sint",
    //   category: "Javascript",
    //   created: "2020-10-02T01:09:28.827Z",
    //   description:
    //     "Nisi anim magna elit nisi commodo irure officia ea consectetur veniam tempor aute. Adipisicing deserunt sint occaecat dolor. Cupidatat tempor dolor in consectetur consequat aliqua dolore. Non sint veniam in laborum voluptate voluptate elit laborum et cupidatat. Do eiusmod ex laborum esse mollit nisi ipsum.",
    //   body:
    //     "Non sunt nostrud fugiat labore ut officia elit. Elit aliqua duis enim est laborum nisi dolor consequat incididunt. Sunt ad ipsum dolore culpa dolore eiusmod adipisicing labore.",
    //   cover: "postImages/1.png"
    // }
  };

  onCardSelect = card => {
    this.setState({ selectedCard: card });
  };

  render() {
    return (
      <Router>
        <div>
          <div>
            <h2 className="react-header">Learning React</h2>
          </div>
          <div>
            <Switch>
              <Route
                path="/detail/:id"
                render={props => (
                  <CardDetail
                    selectedCard={this.state.selectedCard}
                    {...props}
                  />
                )}
              />

              <Route
                path="/"
                render={props => (
                  <CardList
                    data={data}
                    onCardSelect={this.onCardSelect}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
