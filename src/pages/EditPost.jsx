import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [posts, setPosts] = useLocalStorage('blogPosts', [])
  const [post, setPost] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    excerpt: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundPost = posts.find(p => p.id === id)
    if (foundPost) {
      setPost(foundPost)
      setFormData({
        title: foundPost.title,
        author: foundPost.author,
        content: foundPost.content,
        excerpt: foundPost.excerpt
      })
    }
    setLoading(false)
  }, [id, posts])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.author.trim() || !formData.content.trim()) {
      setError('Please fill in all required fields')
      return
    }

    const updatedPost = {
      ...post,
      title: formData.title.trim(),
      author: formData.author.trim(),
      content: formData.content.trim(),
      excerpt: formData.excerpt.trim() || formData.content.trim().substring(0, 150) + '...',
      updatedAt: new Date().toISOString()
    }

    setPosts(posts.map(p => p.id === id ? updatedPost : p))
    navigate(`/blog/${id}`)
  }

  if (loading) {
    return <div className="loading">Loading post...</div>
  }

  if (!post) {
    return (
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ marginBottom: '16px', color: '#6b7280' }}>Post not found</h2>
          <p style={{ marginBottom: '24px', color: '#9ca3af' }}>
            The blog post you're trying to edit doesn't exist.
          </p>
          <button onClick={() => navigate('/blog')} className="btn btn-primary">
            Back to Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Edit Post</h1>
        
        {error && <div className="error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter post title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author" className="form-label">
              Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt" className="form-label">
              Excerpt
            </label>
            <input
              type="text"
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="form-input"
              placeholder="Brief description (optional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Write your post content here..."
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => navigate(`/blog/${id}`)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost
