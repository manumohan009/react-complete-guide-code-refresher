import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import Posts from './routes/Posts.jsx'
import NewPost from './routes/NewPost.jsx'
import PostDetails from './routes/PostDetails.jsx'
import {loader as postsLoader} from './routes/Posts.jsx'
import {loader as postDetailsLoader} from './routes/PostDetails.jsx'
import {loader as newPostAction} from './routes/NewPost.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children:[
      {
        path: '/',
        element: <Posts/>,
        loader: postsLoader,
        children:[
          { path: '/create-post', element: <NewPost/>, action: newPostAction },
          { path: '/:postId', element: <PostDetails/>, loader: postDetailsLoader}
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
