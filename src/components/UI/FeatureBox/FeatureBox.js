import React from 'react';

const featureBox = (props) => {
    return (
        <div className="feature-box">
            <span className="feature-box__icon" style={{backgroundImage:"url(https://png.icons8.com/ultraviolet/26/000000/geography.png)"}}/>
            <h3 className="heading-tertiary u-margin-bottom-small" >Explore the world</h3>
            <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quibusdam facilis non distinctio et explicabo ea delectus ullam? Consequatur aliquid nobis accusantium debitis qui nam totam vel incidunt, assumenda repudiandae.
            </p>
        </div>
    );
};

export default featureBox;