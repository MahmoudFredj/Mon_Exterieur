import React, { Component } from 'react';
import { setup } from "./canvas/setup";
class Loading extends Component {
    canvasRef = React.createRef()
    componentDidMount() {
        setup(this.canvasRef.current);
    }
    render() {
        return (
            <canvas className="loading-screen-canvas" ref={this.canvasRef}>
            </canvas>
        );
    }
}
export default Loading;