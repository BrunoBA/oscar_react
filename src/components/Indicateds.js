import React, { Component } from 'react';
import image from '../imgs/star_wars_the_last_jedi.jpg';

export default class Indicateds extends Component {

    constructor () {
        super();
    }

    render () {
        return (<div className="indicateds">
                    <ul>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                        <li>
                            <Indicated/>
                        </li>
                    </ul>
                </div>)
    }
}

export class Indicated extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="indicated">
                <img src={image}/>
                <span className="title">Star Wars: The Last Jedi</span>
                <span className="sublegend">(Star Wars: Os últimos Jedi)</span>
            </div>
        );
    }
}