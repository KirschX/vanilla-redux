import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail(props) {
    const id = useParams();
    console.log(id)
    return <h1>Detail</h1>;
}

function mapStateToProps(state, ownProps){
    console.log("hi")
    // return {toDo: state.find(toDo => toDo.id === parseInt(id))} ;
}

export default connect(mapStateToProps) (Detail);