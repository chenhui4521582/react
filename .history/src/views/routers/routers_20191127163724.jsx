import React from "react";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

function BasicExample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/routers/home">Home</Link>
        </li>
        <li>
          <Link to="/routers/about">About</Link>
        </li>
        <li>
          <Link to="/routers/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Router>
        <Route exact path="/routers" component={Home} render={
          <Redirect to="/routers/home"></Redirect>
        }/>

        <Route path="/routers/about" component={Home} />
        <Route path="/routers/about" component={About} />
        <Route path="/routers/topics" component={Topics} />
      </Router>
   </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

class Topic extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.match+ 'didMount')
  }
  componentWillReceiveProps(value) {
    console.log(value)
  }
  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}

export default BasicExample;
