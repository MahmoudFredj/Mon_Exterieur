import React, { Component } from 'react';
import { setup } from "./canvas/setup";
class Loading extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="loading-screen">
                <div className="loader">
                    <span></span>
                </div>
            </div>
        );
    }
}
export default Loading;