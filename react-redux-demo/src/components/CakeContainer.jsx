import React from 'react'

function CakeContainer(props) {
  return (
    <div>
    <h2>Number of Cakes - {props.numOfCakes}</h2>
    <button onClick ={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default CakeContainer