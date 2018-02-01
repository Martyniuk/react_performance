// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Shisha extends Component {
    static propTypes = {
        name: string.isRequired,
        img:  string.isRequired,
    };
    
    render() {
        const { name, img } = this.props;
        return (
            <div className={Styles.shisha}>
                 <img className={Styles.shishaImg} src={img} alt="kurnem?"/>
                 <p className={Styles.shishaText}>{name}</p>
            </div>
        )
    }
}
