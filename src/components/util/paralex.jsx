import React, { Component } from 'react';
class Paralax extends Component {

    parRef = React.createRef();
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
        const offset = window.pageYOffset;
        const para = this.parRef.current;
        if (offset < 600)
            para.style.top = `${offset}px`;
    }
    render() {
        return (
            <div className={this.props.className} ref={this.parRef}>
                {this.props.children}
            </div>
        );
    }
}

export default Paralax;