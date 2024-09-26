import React from "react";
import ExtraHelper from "./ExtraHelper";
import express from '../assets/express.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import js from '../assets/js.png';
import sql from '../assets/sql.png';
import linux from '../assets/linux.png';
import ts from '../assets/ts.png';
import sass from '../assets/sass.png';
import react from '../assets/react.png';
import css from '../assets/css.png';
import python from '../assets/python.png';
import webpack from '../assets/webpack.png';
import html from '../assets/html.png';
import kali from '../assets/kali-linux-48.png';
import '../sass/extra.sass';

const Extra: React.FC = () => {
    return (
        <div className="extra">
            <ExtraHelper img={express} />
            <ExtraHelper img={firebase} />
            <ExtraHelper img={git} />
            <ExtraHelper img={github} />
            <ExtraHelper img={js} />
            <ExtraHelper img={sql} />
            <ExtraHelper img={linux} />
            <ExtraHelper img={ts} />
            <ExtraHelper img={sass} />
            <ExtraHelper img={react} />
            <ExtraHelper img={css} />
            <ExtraHelper img={python} />
            <ExtraHelper img={webpack} />
            <ExtraHelper img={html} />
            <ExtraHelper img={kali} />
        </div>
    )
}

export default Extra;