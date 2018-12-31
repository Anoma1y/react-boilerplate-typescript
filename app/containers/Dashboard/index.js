import * as React from 'react';
import { connect } from 'react-redux';
import { changeName } from './store/actions';

@connect(({ Dashboard }) => ({ Dashboard }), ({
  changeName
}))
export default class Dashboard extends React.Component {
  render() {
    const { Dashboard, changeName } = this.props;
    return (
      <div>
        <input
          type="text"
          value={Dashboard.name}
          onChange={(e) => changeName(e.target.value)}
        />
      </div>
    );
  }
}
