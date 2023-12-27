import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader.js';
import Specialty from './Section/Specialty.js';

class HomePage extends Component {

    render() {
        return (
            <>
                <HomeHeader />
                <Specialty />
                <div style={{height: '100px'}}></div>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
