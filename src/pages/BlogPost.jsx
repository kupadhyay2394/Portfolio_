import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const BlogPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [posts] = useLocalStorage('blogPosts', [])
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundPost = posts.find(p => p.id === id)
    if (foundPost) {
      setPost(foundPost)
    }
    setLoading(false)
  }, [id, posts])

  if (loading) {
    return <div className="loading">Loading post...</div>
  }

  if (!post) {
    return (
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ marginBottom: '16px', color: '#6b7280' }}>Post not found</h2>
          <p style={{ marginBottom: '24px', color: '#9ca3af' }}>
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <span>By {post.author}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="blog-post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '16px' }}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="blog-post-actions">
          <Link to="/blog" className="btn btn-secondary">
            Back to Blog
          </Link>
          <Link to={`/blog/${post.id}/edit`} className="btn btn-primary">
            Edit Post
          </Link>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
