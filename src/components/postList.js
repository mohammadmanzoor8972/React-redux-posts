import React from "react";
import { connect } from "react-redux";
import { fetchPostAPI } from "../services/postServices";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAPI();
  }

  render() {
    return (
      <>
        <p>**App is Ready</p>
        <p>{this.props.status}</p>}
        {this.props.posts &&
          this.props.posts.map(item => <p key={item.id}>{item.title}</p>)}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts.posts,
    status: state.posts.status
  };
};

const mapDispatchToProps = {
  fetchPostAPI
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
