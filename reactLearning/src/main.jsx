import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import About from '../Component/ReactRouterDom/About.jsx'
import User from '../Component/ReactRouterDom/User.jsx'
import { Home } from '../Component/ReactRouterDom/Home.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/user",
//         element: <User />
//       }
//     ]
//   },
// ])


createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
