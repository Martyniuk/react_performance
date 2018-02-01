// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Shisha extends Component {
    static propTypes = {
        img:  string.isRequired,
        name: string.isRequired
    };
    
    render () {
        const { name, img } = this.props;

        return (
            <div className = { Styles.shisha }>
                <img alt = 'kurnem?' className = { Styles.shishaImg } src = { img } />
                <p className = { Styles.shishaText }>{name}</p>
            </div>
        );
    }
}
