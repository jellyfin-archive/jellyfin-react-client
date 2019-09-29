import React, { Component } from "react";
import { connect } from "react-redux";
import EntryComponent, { EntryComponentState } from "../components/EntryComponent";
import { JellyfinProps } from "../Props";


class EntryScreen extends Component<JellyfinProps> {
    constructor(props: JellyfinProps) {
        super(props);
    }

    render() {
        return <EntryComponent/>;
    }
}

// auth and sample are the reducer keys defined in ../utilities/storage/store.ts
function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps)(EntryScreen);
