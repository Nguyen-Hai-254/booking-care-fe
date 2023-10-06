import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { handleEditUser } from '../../services/userLoginService';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                roleId: '',
            },
            errCode: ''
        }
    }

    async componentDidMount() {

    }

    toggleEdit = () => {
        this.props.toggleEdit()
    }

    changeInput = (event, id) => {
        let copyState = this.state.dataUser;
        copyState[id] = event.target.value;
        this.setState({
            dataUser: copyState
        })
    }

    validateUser = () => {
        let arr = ['email', 'password', 'firstName', 'lastName'];
        for (let i = 0; i < arr.length; i++) {
            if (!this.state[arr[i]]) {
                this.setState({
                    errCode: 'Missing input ' + arr[i]
                })
                return false;
            }
        }
        return true;
    }

    editUser = async () => {
        if (this.validateUser()) {
            try {
                let res = await handleEditUser(this.state.dataUser);
                if (res && res.errCode === 0) {
                    this.setState({
                        errCode: ''
                    })
                    this.props.editUserFromManage(this.state.dataUser);
                    this.props.toggleEdit();
                }
                else {
                    this.setState({
                        errCode: res.message
                    })
                }
            } catch (error) {
                if (error) {
                    if (error.response && error.response.data && error.response.data.errCode) {
                        this.setState({
                            errCode: error.response.data.message
                        })
                    }
                }
            }
        }
    }

    render() {
        return (
            <>
                <Modal isOpen={this.props.isOpenModalEdit}
                    toggleEdit={() => this.toggleEdit()}
                    size='lg'
                >
                    <ModalHeader toggle={() => this.toggleEdit()}
                        style={{ height: "4em" }}
                    >
                        Edit User
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <form action="/post_CRUD" method="POST">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" 
                                            placeholder="Email" name="email"
                                            onChange={(e) => this.changeInput(e, 'email')}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control"  placeholder="Password" name="password"
                                            onChange={(e) => this.changeInput(e, 'password')}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name: " name="fname"
                                            onChange={(e) => this.changeInput(e, 'firstName')}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name: " name="lname"
                                            onChange={(e) => this.changeInput(e, 'lastName')} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" placeholder="1234 Main St" name="address"
                                        onChange={(e) => this.changeInput(e, 'address')} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label htmlFor="inputAddress2">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number: " name="phoneNumber"
                                            onChange={(e) => this.changeInput(e, 'phoneNumber')} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputGender">gender</label>
                                        <select name="gender" className="form-control">
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="roleId">Role</label>
                                        <select name="roleId" className="form-control">
                                            <option value="1">Admin</option>
                                            <option value="2">Doctor</option>
                                            <option value="3">Patient</option>
                                        </select>
                                    </div>
                                </div>
                                <div style={{ color: 'red', fontSize: '16px' }}>
                                    {this.state.errCode}
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editUser()}
                            className='px-2'
                        >
                            Edit User
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.toggleEdit()}
                            className='px-2'
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
