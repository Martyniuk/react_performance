// Core
import React from 'react';
import { number } from 'prop-types';

// Instruments
import Styles from './styles.scss';

const Numbers = (props) => (
    <div className={Styles.numbers}>
        <p className={Styles.number}>Current state N: <span>{props.number}</span></p>
        <p className={Styles.number}>Prev state N: <span>{props.prevNumber}</span></p>
    </div>
);

Numbers.propTypes = {
    number:     number.isRequired,
    prevNumber: number.isRequired
};

export default Numbers;