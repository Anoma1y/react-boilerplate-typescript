import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './components/Image';

const mapStateToProps = ({
  router
}) => ({
  router
});

const mapDispatchToProps = ({

});

@connect(mapStateToProps)
export default class App extends Component {
  render() {
    return (
      <div className={'page'}>
        <Image src={'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'} alt={"qwe"}/>
        <h1>Hello World</h1>
      </div>
    );
  }
}
