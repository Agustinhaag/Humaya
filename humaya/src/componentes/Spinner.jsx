import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <ThreeCircles
            height="150"
            width="150"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#003686"
            innerCircleColor="#ceb17c"
            middleCircleColor="#003686"
        />
    );
};

export default Spinner;
