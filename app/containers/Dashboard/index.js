import * as React from 'react';
import { connect } from 'react-redux';

@connect(({ Dashboard }) => ({ Dashboard }), ({

}))
export default class Dashboard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello
      </div>
    );
  }
}
