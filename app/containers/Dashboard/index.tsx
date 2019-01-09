import * as React from "react";
import { connect } from "react-redux";
import { IDashboardTypes } from "./store/reducer";
import {
  changeName,
  changeAuthor,
  changeThunkAuthor,
  changePromiseAuthor,
  IPromiseAuthor
} from "./store/actions";

interface IProps {
  Dashboard: IDashboardTypes;
  changeName?: (value: string) => void;
  changeAuthor?: (key: string, value: string) => void;
  changeThunkAuthor?: () => void;
  changePromiseAuthor?: (name: string, age: string) => Promise<IPromiseAuthor>;
}

interface IState {
  ready: boolean;
}

const mapStateToProps = ({ Dashboard }) => ({ Dashboard });

const mapDispatchToProps = {
  changeName,
  changeAuthor,
  changeThunkAuthor,
  changePromiseAuthor
};

class Dashboard extends React.Component<IProps, IState> {
  state = {
    ready: false
  };

  componentDidMount() {
    this.props.changePromiseAuthor!("Hello", "22").then(() => {
      this.setState({
        ready: true
      });
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.Dashboard.name}
          onChange={(e) => this.props.changeName!(e.target.value)}
        />
        <hr />
        <input
          type="text"
          value={this.props.Dashboard.author.name}
          onChange={(e) => this.props.changeAuthor!("name", e.target.value)}
        />
        <input
          type="text"
          value={this.props.Dashboard.author.age}
          onChange={(e) => this.props.changeAuthor!("age", e.target.value)}
        />
        <input type="submit" onClick={() => this.props.changeThunkAuthor!()} />
      </div>
    );
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
) as any)(Dashboard);
