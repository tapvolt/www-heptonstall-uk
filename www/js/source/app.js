'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Image from './components/Image';
import Copy from './components/Copy';
import Weather from './components/WeatherUnderground';

ReactDOM.render(
    <div>
        <h1>
            <Logo /> Heptonstall Weather Webcam
        </h1>

        <Image />

        <Copy />

        {/*<Weather />*/}

    </div>,
    document.getElementById('app')
);
