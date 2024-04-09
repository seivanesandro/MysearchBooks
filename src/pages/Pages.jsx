import React from 'react';
//import PropTypes from 'prop-types'
import {
    Routes,
    Route
    //Switch,
    //HashRouter
} from 'react-router-dom';
import Home from '../components/home/Home';
import Genre from '../components/genre/Genre';
import Main from '../components/main/Main';
import Search from '../components/search/Search';

const Pages = props => {
    return (
        <Routes>
            <Route
                path="/"
                and
                element={<Home />}
            />
            <Route
                path="/genre"
                and
                element={<Genre />}
            />
            <Route
                path="/:name"
                and
                element={<Main />}
            />
            <Route
                path="/genre/:name"
                and
                element={<Search />}
            />
        </Routes>
    );
};

Pages.propTypes = {};

export default Pages;
