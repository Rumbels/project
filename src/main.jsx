import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthForm from './Pages/AuthForm/AuthForm'
import Users from './Pages/Users/Users'
import User from './Pages/User/User'
import { CreateUserModal } from './components/CreateUserModal/CreateUserModal'
import RemoveUserModal from './components/RemoveUserModal/RemoveUserModal'
import { Outlet, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'
import { Provider } from 'react-redux'
import store from './store/store'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const Root = () => {
  return(
    <div className="container">
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index  element={<AuthForm />} />
      <Route path='/users'  element={<ProtectedRoute><Users /></ProtectedRoute> } />
      <Route path='/users/:userId' element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path='*'  element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)
