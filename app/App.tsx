import * as React from "react";
import { connect } from "react-redux";

import Image from "./components/Image";
import Dashboard from "./containers/Dashboard";

const mapStateToProps: IMapStateToProps = ({ router }) => ({ router });

class App extends React.Component {
  render() {
    return (
      <div className={"page"}>
        <Image src={"/static/images/15404118224970.jpg"} alt={"qwe"} />
        <Dashboard />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default (connect(mapStateToProps) as any)(App);
