// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {id} = item
  return (
    <Link to={`/blogs/${id}`} className="itemClass">
      <div className="innerContainer">
        <div className="sec1">
          <img src={item.imageUrl} alt={`item${id}`} className="cardImage" />
        </div>
        <div className="sec2">
          <p>{item.topic}</p>
          <h1>{item.title}</h1>
          <div className="innerSec2">
            <img src={item.avatarUrl} alt={`avatar${id}`} className="author" />
            <p>{item.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
