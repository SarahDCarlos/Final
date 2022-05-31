import React from 'react';
import { Post } from './Post.js';
import { postApi } from './rest/PostApi.js';
import { NewPostForm } from './NewPostForm';

export class PostList extends React.Component{
    state = {
        posts : []
    };

    componentDidMount(){
         this.fetchPosts();
    }
    fetchPosts = async () => {
        const posts = await postApi.get();
        this.setState({ posts }); 
    };
    updatePost = async (updatedPost) => {
        await postApi.put(updatedPost);
        this.fetchPosts();
    };

    deletePost = async (post_id) => {
        await postApi.delete(post_id);
        this.fetchPosts();
    }

    createPost = async (newPost) => {
        await postApi.create(newPost);
        this.fetchPosts();
    }

    render(){
        return(
            <div className = 'post-list'>
                <h1>Posts</h1>
                <ul className='posts-container'>
                {this.state.posts.map((post) => (
                    <Post
                    post = {post}
                    key = {post._id}
                    updatePost = {this.updatePost}
                    deletePost = {this.deletePost}
                    />  
                ))}
                </ul>
                <div className = ''>
                    <NewPostForm addNewPost = {this.createPost} />
                </div>
            </div>
        )
    }

}

