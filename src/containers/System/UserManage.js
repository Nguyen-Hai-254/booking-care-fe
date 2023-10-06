import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { handleGetAllUser, handleDeleteUser } from '../../services/userLoginService';
import ModalInsertUser from './ModalInsertUser';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isOpenModal: false,
            isOpenModalEdit: false,
            currentUser: {}
        }
    }

    async componentDidMount() {
        let res = await handleGetAllUser('all');
        if (res && res.errCode === 0) {
            this.setState({
                data: res.data
            })
        }
    }

    handleInsertUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    handleEditUser = (userData) => {
        this.setState({
            isOpenModalEdit: true,
            currentUser: userData
        })
    }

    toggle = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    toggleEdit = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit
        })
    }

    addNewUser = (userData) => {
        this.setState({
            data: [...this.state.data, userData]
        })
    }

    editUser = (userData) => {

    }

    deleteUser = async (id) => {
        try {
            let res = await handleDeleteUser(id);
            if (res.errCode === 0) {
                let response = await handleGetAllUser('all');
                if (response && response.errCode === 0) {
                    this.setState({
                        data: response.data
                    })
                }
            }
            else {
                alert(res.message);
            }
        } catch (error) {
            if (error) {
                if (error.response && error.response.data && error.response.data.errCode) {
                    alert(error.response.data.message)
                }
            }
        }
    }


    render() {
        const data = this.state.data;
        return (
            <>
                <ModalInsertUser
                    isOpenModal={this.state.isOpenModal}
                    toggleInsert={this.toggle}
                    addNewUser={this.addNewUser}
                />
                <div className="title text-center">Manage users</div>
                <div className='mx-5'>
                    <button className='btn btn-primary btn-lg px-2 h-50'
                        onClick={() => this.handleInsertUser()}
                    >
                        <i className="fas fa-plus px-2"></i>
                        Add User
                    </button>
                </div>
                <table id="customers" className='mt-3' style={{ width: '95%', margin: 'auto' }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data && data.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                <ModalEditUser
                                                    userData={this.state.currentUser}
                                                    isOpenModalEdit={this.state.isOpenModalEdit}
                                                    toggleEdit={this.toggleEdit}
                                                    editUserFromManage={this.editUser}
                                                />
                                                <a onClick={() => this.handleEditUser(item)} className="btn_edit" type="button">Edit</a>
                                                <a onClick={() => this.deleteUser(item.id)} className="btn_delete ml-3" type="button">Delete</a>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table >
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
