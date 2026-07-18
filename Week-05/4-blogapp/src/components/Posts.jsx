import React, { Component } from 'react'

export class Post extends Component {
  render() {
    const { title, body } = this.props;
    if (title === 'CRASH_TEST') {
      throw new Error("Simulated rendering crash in Post child component!");
    }
    return (
      <div className="card" style={{ borderLeft: '4px solid var(--accent-color)', padding: '1.25rem' }}>
        <h4 style={{ textTransform: 'capitalize', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{body}</p>
      </div>
    );
  }
}

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      triggerCrash: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts from JSONPlaceholder');
        return res.json();
      })
      .then(data => {
        this.setState({ posts: data.slice(0, 5), error: null }); // Renders first 5 posts
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ error: error.toString() });
    alert("componentDidCatch Hook triggered! Caught: " + error.toString());
  }

  render() {
    if (this.state.error) {
      return (
        <div className="card" style={{ borderColor: 'var(--danger-color)', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--danger-color)' }}>⚠️ Component Error Boundaries Active</h3>
          <p style={{ margin: '1rem 0' }}>{this.state.error}</p>
          <button 
            style={{ backgroundColor: 'var(--accent-color)', color: '#0f172a' }}
            onClick={() => {
              this.setState({ error: null, triggerCrash: false });
              this.loadPosts();
            }}
          >
            Reset Component State & Retry
          </button>
        </div>
      );
    }

    // Force an error inside a child by rendering a post with CRASH_TEST title
    const renderedPosts = this.state.triggerCrash 
      ? [{ id: 999, title: 'CRASH_TEST', body: 'This will trigger crash!' }]
      : this.state.posts;

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--accent-color)' }}>📰 Tech Blog Articles</h3>
          <button 
            style={{ backgroundColor: 'var(--danger-color)', color: 'white' }}
            onClick={() => this.setState({ triggerCrash: true })}
          >
            Trigger rendering crash
          </button>
        </div>

        {renderedPosts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading blog posts...</p>
        ) : (
          renderedPosts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}
