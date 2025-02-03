import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Homes from './pages/Homes';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import AuthorsPosts from './pages/AuthorsPosts';
import CreatePosts from './pages/CreatePosts';
import EditPosts from './pages/EditPosts';
import CategoryPosts from './pages/CategoryPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import Authors from './pages/Authors';
import Layout from './components/Layout';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout/> ,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Homes />},
      {path: "post/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile:/id", element: <UserProfile />},
      {path: "authors", element: <Authors />},
      {path: "create", element: <CreatePosts />},
      {path: "posts/categories/:category", element: <CategoryPosts />},
      {path: "posts/users/:id", element: <AuthorsPosts />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPosts />},
      {path: "logout", element: <Logout />},
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

