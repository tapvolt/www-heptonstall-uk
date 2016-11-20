'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Image from './components/Image';
import Copy from './components/Copy';
import Weather from './components/WeatherUnderground';

ReactDOM.render(
    <div>

        <Header />

        <Image />

        <Copy />

        <Weather />

    </div>,
    document.getElementById('app')
);
