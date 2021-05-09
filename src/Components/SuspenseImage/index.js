import React from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const SuspenseImg = ({ src, ...rest }) => {

    return (
        <div>
            <LazyLoadImage
                {...rest}
                height={50}
                src={src} // use normal <img> attributes as props
                width={50}
                effect="blur"
                style={{ borderRadius: '50%' }} />
        </div>
    )
};