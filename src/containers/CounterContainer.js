import React from 'react'
import PropTypes from 'prop-types'
import Splash from '../components/Splash'
// import ActionTypes from '../constants/actionTypes'
// import { incrementIfOdd } from '../actions/counter'
import { connect } from 'react-redux'

class CounterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  render() {
    return <Splash></Splash>
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(CounterContainer)
