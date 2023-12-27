import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import { changeLanguage } from '../../store/actions/appActions';

class HomePage extends Component {
    clickChangeLanguage = () => {
        this.props.changeLanguageApp()
    }

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>

                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='child-content-title'><FormattedMessage id="homeHeader.specialty" /></div>
                                <div className='child-content-description'><FormattedMessage id="homeHeader.Find_a_doctor_on_request" /></div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'><FormattedMessage id="homeHeader.health_facility" /></div>
                                <div className='child-content-description'><FormattedMessage id="homeHeader.Choose_a_hospital_or_clinic" /></div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'><FormattedMessage id="homeHeader.doctor" /></div>
                                <div className='child-content-description'><FormattedMessage id="homeHeader.Choose_a_good_doctor" /></div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'><FormattedMessage id="homeHeader.medical_package" /></div>
                                <div className='child-content-description'><FormattedMessage id="homeHeader.General_health_check" /></div>
                            </div>
                        </div>

                        <div className='right-content'>
                            <div className='support'>
                                <div className='support-group'>
                                    <i className="fa-solid fa-circle-question"></i>
                                    <div className='support-letter'>
                                        <FormattedMessage id="homeHeader.support" />
                                    </div>
                                </div>
                                <div className='support-phone'>0123-456-789</div>
                            </div>
                            <div className='language' onClick={() => this.clickChangeLanguage()}>
                                <FormattedMessage id="homeHeader.language" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-banner-container'>
                    <div className='background'>
                        <div className='titleAndSearch'>
                            <div className='title1-banner'>
                                <FormattedMessage id="banner.title1" />
                            </div>
                            <div className='title2-banner'>
                                <FormattedMessage id="banner.title2" />
                            </div>
                            <div className='search-banner'>
                                <i className="fas fa-search"></i>

                                <input className='search-form' type='text' placeholder='Tìm kiếm phòng khám' />

                            </div>
                        </div>


                        <div className='options-banner'>
                            <div className='row-option'>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-chuyen-khoa'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.specialist_examination" />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-tu-xa'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.remote_examination" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-tong-quat'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.general_examination" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-xnyh'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Medical_tests" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-sktt'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Mental_health" />
                                    </div>
                                </div>
                            </div>
                            <div className='row-option'>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-knk'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Dental_examination" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-gpt'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Surgical_package" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-sktd'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Diabetes_health" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-btsk'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Healthy_test" />
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-ytgb'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        <FormattedMessage id="banner.Medical_near_you" />
                                    </div>
                                </div>
                            </div>

                        </div>
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
        changeLanguageApp: () => dispatch(changeLanguage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
