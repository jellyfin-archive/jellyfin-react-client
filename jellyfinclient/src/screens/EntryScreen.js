import React, {Component} from 'react';
import {connect} from "react-redux";

import  SampleAction from './../actions/SampleAction';
import TopLevelComponent from '../components/TopLevelComponent'


class EntryScreen extends Component {
    render() {
        return (
            <TopLevelComponent
                message={this.props.sampleReducer.message}
            />
        );
    }
}

function mapStateToProps({sampleReducer}) {
    return ({sampleReducer})
}


export default connect(mapStateToProps)(EntryScreen);
