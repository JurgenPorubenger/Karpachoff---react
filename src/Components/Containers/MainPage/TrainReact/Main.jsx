import React from 'react';
import axios from 'axios';
import withSubscription from './hoc/hoc';
import CommentList from './hoc/CommentList';
import BlogPost from './hoc/Blogpost';


const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments(),
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id),
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person) => <li>{person.name}</li>)}
      </ul>
    );
  }
}
