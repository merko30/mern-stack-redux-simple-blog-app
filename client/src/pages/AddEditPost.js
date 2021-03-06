import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../posts/components/PostForm";
import { addPost, updatePost } from "../posts/posts.actions";

const AddEditPost = ({ editMode }) => {
  const post = useSelector(({ posts: { post } }) => post);
  const dispatch = useDispatch();

  if (editMode) {
    return (
      <PostForm
        onSubmit={(id, post) => dispatch(updatePost(id, post))}
        post={post}
        editMode={editMode}
      />
    );
  } else {
    return <PostForm onSubmit={p => dispatch(addPost(p))} editMode={false} />;
  }
};

export default AddEditPost;
