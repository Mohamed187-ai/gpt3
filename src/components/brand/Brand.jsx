import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import Zoom from 'react-reveal/Zoom';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <Zoom left  cascade> <img src={google} /> </Zoom>
            </div>
            <div>
                <Zoom bottom cascade> <img src={slack} /> </Zoom>
            </div>
            <div>
                <Zoom top cascade> <img src={atlassian} /> </Zoom>
            </div>
            <div>
                <Zoom bottom cascade> <img src={dropbox} /> </Zoom>
            </div>
            <div>
                <Zoom right cascade> <img src={shopify} /> </Zoom>
            </div>
        </div>
    )
}

export default Brand
