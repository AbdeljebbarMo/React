import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const { id,name } = useParams();
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae optio vel nisi magnam, corrupti tenetur nemo exercitationem placeat, velit numquam recusandae aliquid accusamus magni aliquam voluptatum neque, similique culpa molestias!
            </h1>
        </div>
    );
};

export default About;
