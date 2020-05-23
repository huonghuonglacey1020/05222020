import React from 'react';
import Project from '../Project.js';
import pwImage from '../photos/pwImage.jpg';
// import plannerImage from '../photos/day_planner.png';
// import quizImage from '../photos/quiz_app.png';
import weatherImage from '../photos/weatherImage.jpg';
import trackerImage from '../photos/trackerImage.jpg';
import noteImage from '../photos/noteImage.jpg';
import hw10 from '../photos/hw10.jpg'

import burgerImage from '../photos/burgerImage.jpg';


const projects = [
    {
        id: 1,
        name: 'Random Generator',
        link: 'https://huonghuonglacey1020.github.io/password-2/',
        image: pwImage
    },
    {
        id: 2,
        name: 'weather dashboard',
        link: 'https://huonghuonglacey1020.github.io/weather/',
        image: weatherImage
    },
    {
        id: 3,
        name: 'note taker',
        link: 'https://limitless-ravine-94546.herokuapp.com/',
        image: noteImage
    },
    {
        id: 4,
        name: 'burgers',
        link: 'https://intense-hamlet-52653.herokuapp.com/',
        image: burgerImage
    },
    {
        id: 5,
        name: 'Fitness Goal Tracker',
        link: 'https://hidden-reaches-08082.herokuapp.com/stats',
        image: trackerImage
    },
    {
        id: 6,
        name: 'hw10',
        link: 'https://github.com/huonghuonglacey1020/hw11/deployments',
        image: hw10

    }

];

function Porfolio() {
    return (
        <div>
            <Project projects ={projects} />;
        </div>
    )
};

export default Porfolio;