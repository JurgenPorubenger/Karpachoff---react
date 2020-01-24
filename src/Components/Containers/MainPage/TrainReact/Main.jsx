import React from 'react';
import withSubscription from './hoc/hoc';
import CommentList from './hoc/CommentList';

const CommentListWithSubscription = withSubscription(
  CommentList,
  (httpRequest, url) => httpRequest(url),
);

export default () => (
  <CommentListWithSubscription url="https://jsonplaceholder.typicode.com/users" />
);
