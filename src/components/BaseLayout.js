
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export class Header extends Component {

  render() {
    return (
      <div className = 'linkContainer'>
        <div>
          <Link to = '/'>Home</Link>
        </div>
        <div>
          <Link to = '/ViewFlowers'> View Flowers</Link>
        </div>
        <div>
          <Link to = '/AddFlower' > Add Flower </Link>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <h1>Footer</h1>
    )
  }
}
