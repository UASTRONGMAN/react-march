import React, {useState} from 'react';
import UsersComponent from "./components/UsersComponent";
import {IPostModel} from "./models/IPostModel";
import {services} from "./services/api.services";
import PostComponent from "./components/PostComponent";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    const getPosts = (userId: number) => {
        services.posts(userId).then(value => setPosts(value.data.posts))
    }

    return (
        <div>
            <UsersComponent getPosts={getPosts}/>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default App;