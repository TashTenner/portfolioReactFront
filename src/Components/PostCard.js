import React from 'react';

const PostCard = props => {
  const {
    post: {
      title,
      text,
      category
    }
  } = props;

  return (
    <>
      <p>title: {title}</p>
      <p>text: {text}</p>
      <p>category: {category}</p>
    </>
  );
};

export default PostCard;