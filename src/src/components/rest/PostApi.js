const POST_ENDPOINT = 'https://crudcrud.com/api/49eebdcd9bfa4c159c1c72440a35ae7d/postapi';

class PostApi {
    get = async() => {
        try {
            const resp = await fetch (POST_ENDPOINT);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Oops looks like PostApi had an issue.', e)
        }
    }

    put = async (post) => {
        try{
            const resp = await fetch(`${POST_ENDPOINT}/${post.id}`,{

                method: 'PUT',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (post) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like updating posts  had an issue.', e);

        }
       
    }

    delete = async (post_id) => {
        try{
            return await fetch(`${POST_ENDPOINT}/${post_id}`,{

                method: 'DELETE'
             }); 
             
             
        } catch(e){
            console.log('Delete function fail postapi', e);
        }
    }

    create = async (newPost) => {
        try{
            const resp = await fetch(POST_ENDPOINT,{

                method: 'POST',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (newPost) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like create posts had an issue.', e);

        }
       
    }

}



export const postApi = new PostApi(); 