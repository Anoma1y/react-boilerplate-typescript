import * as React from 'react';
import { connect } from 'react-redux';
import Image from './components/Image';
import Dashboard from './containers/Dashboard';

const mapStateToProps = ({
  router
}) => ({
  router
});

const mapDispatchToProps = ({

});

@(connect(mapStateToProps) as any)
export default class App extends React.Component {
  render() {
    return (
      <div className={'page'}>
        <Image src={'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'} alt={'qwe'} />
        <Dashboard />
        <h1>Hello World</h1>
      </div>
    );
  }
}
