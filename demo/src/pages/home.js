import React from 'react';

import logo from '../assets/logo1.svg'

import * as reactRouter from 'react-router'
console.log(Object.keys(reactRouter));

class Tick extends React.Component {
    constructor(props) {
        super(props);
        this.duration = props.duration || 1000
        this.state = { date: new Date() };
        this.time = new Date()
    }
    tick() {
        this.setState({
            date: new Date()
        });
        this.time = new Date()
    }
    componentDidMount() {
        console.log('mount')
        this.timerID = setInterval(
            () => this.tick(),
            this.duration
        );
    }
    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <div>time:{this.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <button onClick={() => this.props.history.push('detail')}>通过函数跳转</button>
                </div>
                <a className="App-link" href='/detail'>去detail</a>
                <div onClick={() => this.props.history.push('detail')}>home</div>
                <Tick></Tick>
            </div>
        )
    }
}