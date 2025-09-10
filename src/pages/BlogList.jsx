import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const BlogList = () => {
  const [posts, setPosts] = useLocalStorage('blogPosts', [])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const deletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id))
    }
  }

  if (loading) {
    return <div className="loading">Loading posts...</div>
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Blog Posts</h1>
        <Link to="/blog/new" className="btn btn-primary">
          Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ marginBottom: '16px', color: '#6b7280' }}>No posts yet</h2>
          <p style={{ marginBottom: '24px', color: '#9ca3af' }}>
            Start writing your first blog post!
          </p>
          <Link to="/blog/new" className="btn btn-primary">
            Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>By {post.author}</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="blog-actions">
                  <Link to={`/blog/${post.id}`} className="btn btn-primary btn-small">
                    Read More
                  </Link>
                  <Link to={`/blog/${post.id}/edit`} className="btn btn-secondary btn-small">
                    Edit
                  </Link>
                  <button 
                    onClick={() => deletePost(post.id)}
                    className="btn btn-danger btn-small"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList
