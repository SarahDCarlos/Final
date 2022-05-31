import React, { useState } from 'react';

export const NewPostForm = (props) => {
     const [title, setTitle] = useState('');
     const [name, setName] = useState('');
     const [post, setPost] = useState('');
     const onSubmit = (e) => {
         e.preventDefault();
         if (title && name  && post) {
            props.addNewPost({
                'title' : title,
                'name' : name,
                'post' : post

            });
            setTitle('');
            setName('')
            setPost('')
         }else {
             console.log('invalid input')
         }
     };

     return(
         <div> 
            <h4>Add a New Post</h4>
            <form onSubmit={onSubmit}>
                 <input 
                    type='text'
                    placeholder='title'
                    onChange = {(e) => setTitle(e.target.value)}
                    value ={title}
                    /> <br />
                <input 
                    type = 'text'
                    placeholder='name'
                    onChange = {(e) => setName(e.target.value)}
                    value = {name}
                    /> <br />
                     <input
                    type = 'text'
                    placeholder='post'
                    onChange = {(e) => setPost(e.target.value)}
                    value = {post}
                    /> <br />
                <button type='submit'>Submit</button>
            </form>
         </div>
     )
};




