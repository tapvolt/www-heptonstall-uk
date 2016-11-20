import React from 'react';

import Contact from './Contact';
import Github from './Github';

class Copy extends React.Component {

    render() {
        return(
            <div className="Copy">

                <p>
                    This image is taken from a live feed of a home security camera
                    looking out from Heptonstall at the valley. An image is taken
                    every 15 minutes and uploaded to this website, if you stay on
                    this page long enough the image will automatically refresh
                    within the page.
                </p>

                <p>
                    The live feed of the security camera is recorded 24-7 to a
                    computer and offers remote online access and email notifications
                    on detected movement.
                </p>

                <Contact />

                <Github />

            </div>
        );
    }

}

export default Copy
