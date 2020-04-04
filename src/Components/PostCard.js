import React from 'react';
// import styled from 'styled-components';

const PostCard = props => {
  const {
    post: {
      title,
      text,
      category
    }
  } = props;

  return (
    <div>
      <p>title: {title}</p>
      <p>text: {text}</p>
      <p>category: {category}</p>
    </div>
  );
};

export default PostCard;