import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
// import { changeLanguage } from '../../store/actions/appActions';

class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className='section-container'>
                    <div className='section-content'>
                        <div className='section-title'>
                            <h2 className='title-name'>
                                <FormattedMessage id="home.specialty" />
                            </h2>
                            <a className='more'><FormattedMessage id="home.more" /></a>
                        </div>
                        <Slider {...settings} className='section-list'>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>Cơ xương khớp</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>2</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>3</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>4</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>5</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>6</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>7</h3>
                            </div>
                            <div className='section-item'>
                                <div className='section-img'></div>
                                <h3 className='h3'>8</h3>
                            </div>
                        </Slider>
                        {/* </div> */}
                    </div>
                </div>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
