import React, { Component } from 'react';
class Paralax extends Component {

    parRef = React.createRef();
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.maxheight = window.screen.height - 200;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
        const offset = window.pageYOffset;
        const para = this.parRef.current;
        if (offset < this.maxheight)
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