import React from 'react';
import {Card} from 'react-bootstrap';


export const Post = (props) => {
   const  {post, updatePost, deletePost} = props;

   return(
    <Card style={{ width: '18rem', minWidth: '200px' }}>
       <Card.Body>
         <Card.Title>{` ${post.title}`}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">{` By: ${post.name}`}</Card.Subtitle>
         <Card.Text>
         {` ${post.post}`}
         </Card.Text>
         <button  onClick={(e) => deletePost(post._id)}>Delete</button>
       </Card.Body>
     </Card>
   );
};