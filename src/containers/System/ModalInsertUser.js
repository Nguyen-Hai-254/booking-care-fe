import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { handleInsertUser } from '../../services/userLoginService';

class ModalInsertUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            roleId: '',
            errCode: ''
        }
    }

    async componentDidMount() {

    }

    toggle = () => {
        this.props.toggleInsert()
    }

    changeInput = (event, id) => {
        let copyState = this.state;
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
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

    addUser = async () => {
        if (this.validateUser()) {
            try {
                let { errCode, ...data } = this.state;
                let res = await handleInsertUser(data);
                if (res && res.errCode === 0) {
                    this.setState({
                        errCode: ''
                    })
                    this.props.addNewUser(res.userData);
                    this.props.toggleInsert();
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
                <Modal isOpen={this.props.isOpenModal}
                    toggle={() => this.toggle()}
                    size='lg'
                >
                    <ModalHeader toggle={() => this.toggle()}
                        style={{ height: "4em" }}
                    >
                        Create new User
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <form action="/post_CRUD" method="POST">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4"
                                            placeholder="Email" name="email"
                                            onChange={(e) => this.changeInput(e, 'email')}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password"
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
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address"
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
                        <Button color="primary" onClick={() => this.addUser()}
                            className='px-2'
                        >
                            Add User
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalInsertUser);
