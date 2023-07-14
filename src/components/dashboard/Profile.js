import React from 'react'
import {connect} from 'react-redux'
import { addName } from '../../actions'

function Profile(props) {
  console.log("nameeee",props.name)
  return (
    <div id="profile" className="ml-auto max-w-xl bg-green-500">
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          props.addName();
        }}
      >
        Add Name
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name.firstName
  }
}

const mapDispatchToProps= dispatch =>{
  return{
    addName: () => dispatch(addName())
  }
}

export default connect(mapStateToProps,mapDispatchToProps
  )(Profile)