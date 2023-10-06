import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HomeHeader from './HomeHeader.scss';
import { Col, Container, Row } from 'reactstrap';

class HomePage extends Component {

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
                                <div className='child-content-title'>Chuyên Khoa</div>
                                <div className='child-content-description'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'>Cơ sở y tế</div>
                                <div className='child-content-description'>Chọn bệnh viện theo phòng khám</div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'>Bác sĩ</div>
                                <div className='child-content-description'>Chọn bác sĩ giỏi</div>
                            </div>

                            <div className='child-content'>
                                <div className='child-content-title'>Gói khám</div>
                                <div className='child-content-description'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>

                        <div className='right-content'>
                            <div className='support'>
                                <div className='support-group'>
                                    <i className="fa-solid fa-circle-question"></i>
                                    <div className='support-letter'>Hỗ trợ</div>
                                </div>
                                <div className='support-phone'>0123-456-789</div>
                            </div>
                            <div className='flag'>VN</div>
                        </div>
                    </div>
                </div>

                <div className='home-banner-container'>
                    <div className='background'>
                        <div className='title1-banner'>
                            NỀN TẢNG Y TẾ
                        </div>
                        <div className='title2-banner'>
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                        </div>
                        <div className='search-banner'>
                            <i className="fas fa-search"></i>

                            <input className='search-form' type='text' placeholder='Tìm kiếm phòng khám' />

                        </div>

                        <div className='options-banner'>
                            <div className='row-option'>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-chuyen-khoa'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Khám chuyên khoa
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-tu-xa'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Khám từ xa
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-kham-tong-quat'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Khám tổng quát
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-xnyh'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Xét nghiệm y học
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-sktt'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Sức khỏe tinh thần
                                    </div>
                                </div>
                            </div>
                            <div className='row-option'>
                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-knk'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Khám nha khoa
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-gpt'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Gói phẫu thuật
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-sktd'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Sức khỏe tiểu đường
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-btsk'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Bài test sức khỏe
                                    </div>
                                </div>

                                <div className='option-child'>
                                    <div className='option-child-border'>
                                        <div className='icon-ytgb'></div>
                                    </div>
                                    <div className='option-child-text'>
                                        Y tế gần bạn
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
