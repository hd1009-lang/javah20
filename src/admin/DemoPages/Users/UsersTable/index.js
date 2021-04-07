import React, {Fragment,useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import PropTypes from "prop-types";
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { Button, Table } from 'react-bootstrap';
import { connect, useDispatch , useSelector} from "react-redux";
import {AiFillCheckCircle,AiOutlineCloseCircle,AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import {LinkContainer} from 'react-router-bootstrap'
import {deleteUser, listUsers} from '../../../../redux/actions/userActions'
import {USER_DELETE_RESET} from '../../../../redux/constants/userConstants'
import Loader from '../../Components/Loader';

const UsersTable = ({ listUsersInfo, successDelete, goDelete, deleteUser, loading, userLogin, history, listUsers }) => {
  const dispatch=useDispatch();
  const [onEdit, setOnEdit] = useState(0);
  const handleDelete=async(id)=>{
    deleteUser(id);
  }
  
  useEffect(()=>{
    if(successDelete) {
      dispatch({type:USER_DELETE_RESET})
    }
    if(!userLogin){
      // window.location.href('/')
      history.push('/');
    }
    listUsers();
  
  },[dispatch, successDelete])
    return (
        <Fragment>
            {/* <PageTitle
                heading="Regular Tables"
                subheading="Tables are the backbone of almost all web applications."
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
            /> */}
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Danh Sách Tài Khoản</CardTitle>
                                {loading?<Loader/>:(
                                <Table striped bordered hover responsive className='table-sm mb-0' bordered>
                                <thead>
                                  <tr align="center">
                                    <th>#</th>
                                    <th>Họ và tên đệm</th>
                                    <th>Tên</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Điện Thoại</th>
                                    <th>isAdmin</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listUsersInfo && listUsersInfo.map((user, key) => {

                                    return(
                                    <tr align="center" >
                                      <th scope="row">{key}</th>
                                      <td >{user.firstname}</td>
                                      <td>{user.lastname}</td>
                                      <td>{user.username}</td>
                                      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                      <td>{user.telephone}</td>
                                      <td>{user.isAdmin?<AiFillCheckCircle/>:<AiOutlineCloseCircle/>}</td>
                                      <td>
                                      <LinkContainer to={`/edit/${user.id}`}>
                                          <Button variant='light' className='btn-sm'>
                                              <AiFillEdit/>
                                          </Button>
                                          </LinkContainer>
                                        &nbsp;&nbsp;&nbsp;
                                        <Button variant='danger' className='btn-sm' onClick={()=>handleDelete(user.id)}>
                                              <AiOutlineDelete/>
                                          </Button>
                                      </td>
                                    </tr>
                                      );
                                    })}
                                </tbody>
                              </Table>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

const mapStateToProps = state => {
  return {
    successDelete: state.userDeleteData.success,
    loading: state.listUsersData.loading,
    userLogin: state.loginData.userInfo,
    listUsersInfo: state.listUsersData.users
  };
};
UsersTable.propTypes = {
  listUsers: PropTypes.object,
};
const mapDispatchToProps = dispatch => {
  
  return {
    deleteUser: (id) => {
      dispatch(deleteUser(id));
    },
    listUsers: () => {
      dispatch(listUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
