import React, {Fragment,useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from "prop-types";
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { connect, useDispatch , useSelector} from "react-redux";
import {AiFillCheckCircle,AiOutlineCloseCircle,AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import {LinkContainer} from 'react-router-bootstrap'
import {deleteUser, listUsers} from '../../../../redux/actions/userActions'
import {USER_DELETE_RESET} from '../../../../redux/constants/userConstants'

import {
    Button, Form,
    FormGroup, Label,
    Input, FormText,
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

const UserEditPage = ({ listUsersInfo, successDelete, goDelete, deleteUser, loading, userLogin, history, listUsers }) => {
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
  //     <Fragment>
  //     <ReactCSSTransitionGroup
  //         component="div"
  //         transitionName="TabsAnimation"
  //         transitionAppear={true}
  //         transitionAppearTimeout={0}
  //         transitionEnter={false}
  //         transitionLeave={false}>
  //         <div>
  //             <Row>
  //             <Col md="6">
  //                 <Card className="main-card mb-3">
  //                     <CardBody>
  //                         <CardTitle>Controls Types</CardTitle>
  //                         <Form>
  //                             <FormGroup>
  //                                 <Label for="exampleEmail">Email</Label>
  //                                 <Input type="email" name="email" id="exampleEmail"
  //                                        placeholder="with a placeholder"/>
  //                             </FormGroup>
  //                             <FormGroup>
  //                                 <Label for="examplePassword">Password</Label>
  //                                 <Input type="password" name="password" id="examplePassword"
  //                                        placeholder="password placeholder"/>
  //                             </FormGroup>
  //                             <FormGroup>
  //                                 <Label for="exampleSelect">Select</Label>
  //                                 <Input type="select" name="select" id="exampleSelect">
  //                                     <option>1</option>
  //                                     <option>2</option>
  //                                     <option>3</option>
  //                                     <option>4</option>
  //                                     <option>5</option>
  //                                 </Input>
  //                             </FormGroup>
  //                             <FormGroup>
  //                                 <Label for="exampleSelectMulti">Select Multiple</Label>
  //                                 <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
  //                                     <option>1</option>
  //                                     <option>2</option>
  //                                     <option>3</option>
  //                                     <option>4</option>
  //                                     <option>5</option>
  //                                 </Input>
  //                             </FormGroup>
  //                             <FormGroup>
  //                                 <Label for="exampleText">Text Area</Label>
  //                                 <Input type="textarea" name="text" id="exampleText"/>
  //                             </FormGroup>
  //                             <FormGroup>
  //                                 <Label for="exampleFile">File</Label>
  //                                 <Input type="file" name="file" id="exampleFile"/>
  //                                 <FormText color="muted">
  //                                     This is some placeholder block-level help text for the above input.
  //                                     It's a bit lighter and easily wraps to a new line.
  //                                 </FormText>
  //                             </FormGroup>
  //                             <Button color="primary" className="mt-1">Submit</Button>
  //                         </Form>
  //                     </CardBody>
  //                 </Card>
  //             </Col>
  //         </Row>
  //         </div>
  //     </ReactCSSTransitionGroup>
  // </Fragment>
  <></>
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
UserEditPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);
