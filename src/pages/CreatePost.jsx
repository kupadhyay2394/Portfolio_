import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CreatePost = () => {
  const [posts, setPosts] = useLocalStorage('blogPosts', [])
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    excerpt: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

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

    const newPost = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      author: formData.author.trim(),
      content: formData.content.trim(),
      excerpt: formData.excerpt.trim() || formData.content.trim().substring(0, 150) + '...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    setPosts([newPost, ...posts])
    navigate(`/blog/${newPost.id}`)
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Create New Post</h1>
        
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
              onClick={() => navigate('/blog')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
