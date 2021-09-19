import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    componentDidUpdate(prevPros, _){
        this.props.posts.push(this.props.newPost)
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}><h3>{post.title}</h3><p>{post.body}</p></div>
        ))
        return (
            <>
                <h3>Posts</h3>  
                {postItems}
            </>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts)
