import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList,RemoveUser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserLists = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);
  const handledelete=(code) =>{
    if(window.confirm('Do you want to Remove')){
        props.removeuser(code);
        props.loadUser();
        toast.success('User removed Successfully')
    }
  }
  return (
    <div>
      {props.user.loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : props.user.errmessage ? (
        <div>
          <h2>{props.user.errmessage}</h2>
        </div>
      ) : 
        <div>
          <div className="card">
            <div className="card-header">
              <Link to={'/user/add'} className="btn btn-success">AddUser</Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                    props.user.userlist && props.user.userlist.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.role}</td>
                              <td>
                                <Link to={'/user/edit/'+item.id} className="btn btn-primary">Edhit</Link>
                                <button onClick={()=>{handledelete(item.id)}} className="btn btn-danger">Delete</button>
                              </td>
                        </tr>
                        )
                }
                    </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserList()),
    removeuser: (code) =>dispatch(RemoveUser(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);
