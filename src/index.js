import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import CreatePosts from './pages/CreatePosts';
import CategoryPosts from './pages/CategoryPosts';
import Authors from './pages/Authors';
import AuthorPosts from './pages/AuthorPosts';
import Dashboards from './pages/Dashboards';
import EditPosts from './pages/EditPosts';
import Logout from './pages/EditPosts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "authors", element: <Authors />},
      {path: "create", element: <CreatePosts />},
      {path: "posts/categories/:category", element: <CategoryPosts />},
      {path: "posts/users/:id", element: <AuthorPosts />},
      {path: "myposts/:id", element: <Dashboards />},
      {path: "posts/:id/edit", element: <EditPosts />},
      {path: "logout", element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
