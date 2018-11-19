import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './components/Image';

@connect(({ router }) => ({ router }))
export default class App extends Component {
  componentDidMount() {
    console.log(this.props.router)
  }
  render() {
    return (
      <div className={'page'}>
        <Image src={'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'} alt={"qwe"}/>
        <h1>Hello World</h1>
      </div>
    );
  }
}
