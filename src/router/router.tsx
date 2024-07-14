import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import TodosPage from "../pages/TodosPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPostsComponent from "../components/userPosts/UserPostsComponent";
import PostCommentsComponent from "../components/postComments/PostCommentsComponent";
import UserTodosComponent from "../components/userTodos/UserTodosComponent";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <UsersPage/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path:':id/posts', element: <UserPostsComponent/>, children:[
                            {path:':id/comments', element:<PostCommentsComponent/>}
                        ]},
                    {path:':id/todos', element:<UserTodosComponent/>}
                ]},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'todos', element: <TodosPage/>}
        ]},

])

export {router}