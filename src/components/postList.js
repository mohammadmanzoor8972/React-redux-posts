import React from "react";
import { connect } from "react-redux";
import { fetchPostAPI, deletePostAPI } from "../services/postServices";

const postStyle = {
  post: {
    border: "1px solid red",
    padding: "5px",
    margin: "2px",
    cursor: "pointer"
  }
};
class PostList extends React.Component {
  componentDidMount() {
    this.props.minePost();
  }

  deleteHandler = item => {
    event.target.style.opacity = 0.2;
    this.props.deletePost(item);
  };

  render() {
    return (
      <>
        <p>**App is Ready</p>
        <p>{this.props.status}</p>
        {this.props.posts &&
          this.props.posts.map(item => (
            <p
              onClick={() => {
                this.deleteHandler(item);
              }}
              style={postStyle.post}
              key={item.id}
            >
              {item.id} - {item.title}
            </p>
          ))}
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
  minePost: fetchPostAPI,
  deletePost: deletePostAPI
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
