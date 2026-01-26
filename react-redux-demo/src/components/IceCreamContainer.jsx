import React from 'react'
import { connect } from 'react-redux'
import { buyicecream } from '../redux/icecream/icecreamActions'

function IceCreamContainer(props) {
  return (
    <div>
    <h2>Number of IceCreams - {props.numOfIcecreams}</h2>
    <button onClick ={props.buyicecream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIcecreams : state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyicecream : () => dispatch(buyicecream())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)

