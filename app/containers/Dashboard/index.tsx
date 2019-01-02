import * as React from 'react';
import { connect } from 'react-redux';
import { IStateTypes } from './store/reducer';
import {
  changeName,
  changeAuthor,
  changeThunkAuthor,
  changePromiseAuthor,

  IPromiseAuthor
} from './store/actions';

interface StateProps {
  Dashboard: IStateTypes
}

interface DispatchProps {
  changeName?: (value: string) => void
  changeAuthor?: (key: string, value: string) => void
  changeThunkAuthor?: () => void
  changePromiseAuthor?: (name: string, age: string) => Promise<IPromiseAuthor>
}

type IProps = StateProps & DispatchProps

type IState = {

}

const mapStateToProps = ({ Dashboard }) => ({ Dashboard });

const mapDispathToProps = {
  changeName,
  changeAuthor,
  changeThunkAuthor,
  changePromiseAuthor
};

class Dashboard extends React.Component<IProps, IState> {

  componentDidMount() {
    this.props.changePromiseAuthor!('Hello', '22')
      .then((data) => {
        console.log(data)
      })
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
          onChange={(e) => this.props.changeAuthor!('name', e.target.value)}
        />
        <input
          type="text"
          value={this.props.Dashboard.author.age}
          onChange={(e) => this.props.changeAuthor!('age', e.target.value)}
        />
        <input type="submit" onClick={() => this.props.changeThunkAuthor!()}/>
      </div>
    );
  }
}

export default (connect(mapStateToProps, mapDispathToProps) as any)(Dashboard)
