import * as React from 'react';
import { connect } from 'react-redux';
import {
  changeName,
  changeAuthor
} from './store/actions';

@connect(({ Dashboard }) => ({ Dashboard }), ({
  changeName,
  changeAuthor
}))
export class Dashboard extends React.Component {
  componentDidMount() {
    debugger;
  }

  render() {
    const { Dashboard, changeName, changeAuthor } = this.props;

    return (
      <div>
        <input
          type="text"
          value={Dashboard.name}
          onChange={(e) => changeName(e.target.value)}
        />
        <hr />
        <input
          type="text"
          value={Dashboard.author.name}
          onChange={(e) => changeAuthor('name', e.target.value)}
        />
        <input
          type="text"
          value={Dashboard.author.age}
          onChange={(e) => changeAuthor('age', e.target.value)}
        />
      </div>
    );
  }
}
