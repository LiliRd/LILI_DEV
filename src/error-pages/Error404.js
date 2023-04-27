import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Error404 extends Component {
    render() {
        return (
                <div>
                    <h1 >404</h1>
                    <h2>Oops...SORRY!</h2>
                    <h3>The page you’re looking for was not found.</h3>
                </div>
        );
    }
}

export default Error404;