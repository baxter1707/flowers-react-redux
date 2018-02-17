import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadFlowerList } from '../store/actions'


export class ViewFlowers extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
      this.props.onFlowerListLoad()
    }

  render() {
    let flowerListItems = this.props.flowers.map((flower,index) => {
    return <div key = {index}>
    <img src={flower.imageURL} />
    <li>{flower.name}</li>
    </div>
  })
    return (
      <div>
    <ul>
    {flowerListItems}
    </ul>
  </div>

      )
    }
  }

const mapStateToProps = state => {
  return {
    flowers : state.flowers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFlowerListLoad : () => dispatch(loadFlowerList())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ViewFlowers)
