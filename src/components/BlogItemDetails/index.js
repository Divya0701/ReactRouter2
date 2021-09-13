// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {result: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const data = this.props
    const {match} = data
    const {params} = match
    const {id} = params
    const result = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await result.json()
    const updatedData = {
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      content: jsonData.content,
      id: jsonData.id,
      imageUrl: jsonData.image_url,
      title: jsonData.title,
      topic: jsonData.topic,
    }

    this.setState({result: updatedData, isLoading: false})
  }

  render() {
    const {result, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bgContainer">
            <h1>{result.title}</h1>
            <div className="innerSec2">
              <img
                src={result.avatarUrl}
                alt={result.author}
                className="author"
              />
              <p>{result.author}</p>
            </div>
            <img
              src={result.imageUrl}
              alt={result.title}
              className="cardImage"
            />
            <p>{result.content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
