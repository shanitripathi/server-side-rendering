import React, { Component } from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class UsersList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  renderUsers() {
    let list = this.props.user.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });

    return list;
  }

  render() {
    return (
      <div>
        {(this.props.user.length && <ul>{this.renderUsers()}</ul>) || (
          <div>shanu this is what i rendered!!!!</div>
        )}
      </div>
    );
  }
}

export function loadData(store) {
  return store.dispatch(fetchUsers());
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default {
  component: connect(mapStateToProps)(UsersList),
  loadData,
};
