
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import { useEffect } from 'react';

const AppLayout = ({ children, layoutType }) => {
  const location = useLocation();
  const isExcludedPage = location.pathname === '/' || location.pathname === '/Login';




  return (
    <div className="App">
      <div className="AppGlas">
        {/* Sidebar is excluded for specific pages */}
        {!isExcludedPage && <Sidebar />}
        
        {/* Conditionally render other components based on layoutType */}
        {layoutType === 'default' && <MainDash />}
        {layoutType === 'default' && <RightSide />}
      </div>
      {/* Render the main content */}
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home (no Sidebar) */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        {/* Orders Page with default layout */}
        <Route
          path="/Orders"
          element={
            <AppLayout layoutType="sidebarOnly">
              <Orders />
            </AppLayout>
          }
        />
        {/* Login Page without Sidebar */}
        <Route
          path="/Login"
          element={
            <AppLayout>
              <Login />
            </AppLayout>
          }
        />
        {/* Customers Page with default layout */}
        <Route
          path="/Customers"
          element={
            <AppLayout layoutType="sidebarOnly">
              <Customers />
            </AppLayout>
          }
        />
        {/* Products Page with only Sidebar */}
        <Route
          path="/Products"
          element={
            <AppLayout layoutType="sidebarOnly">
              <Products />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



















































// import './App.css';
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RightSide/RightSide';
// import Sidebar from './components/Sidebar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login/Login';
// import Orders from './components/Orders/Orders';
// import Customers from './components/Customers/Customers';
// import Products from './components/Products/Products';
// import Home from './components/Home/Home';



// function App() {
//   return (
//     <div className="App">
//       <div className='AppGlass'>
//         <Sidebar />
//         <MainDash />
//         <RightSide />


//       </div>
//       <Router>
//            <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/Orders" element={<Orders />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Customers" element={<Customers />} />
//           {/* <Route path="/Products" element={<Products />} /> */}

//         </Routes>

//       </Router>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RightSide/RightSide';
// import Login from './components/Login/Login';
// import Orders from './components/Orders/Orders';
// import Customers from './components/Customers/Customers';
// import Products from './components/Products/Products';
// import Home from './components/Home/Home';
// import { useSelector } from 'react-redux';
// import Initializer from './components/init/init';

// const AppLayout = ({ children, layoutType }) => {
//   const location = useLocation();
//   const isExcludedPage = location.pathname === '/Login';

//   return (
//     <div className="App">
//       <div className="AppGlas">
//         {!isExcludedPage && <Sidebar />}
//         {layoutType === 'default' && <MainDash />}
//         {layoutType === 'default' && <RightSide />}
//       </div>
//       {children}
//     </div>
//   );
// };

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show loading state while initializing
//   }

//   return isAuthenticated ? children : <Navigate to="/Login" replace />;
// };

// function App() {
//   return (
//     <Router>
//       <Initializer /> {/* Runs at the start */}
//       <Routes>
//         <Route path="/Login" element={<Login />} />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <AppLayout layoutType="default">
//                 <Home />
//               </AppLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/Orders"
//           element={
//             <ProtectedRoute>
//               <AppLayout layoutType="sidebarOnly">
//                 <Orders />
//               </AppLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/Customers"
//           element={
//             <ProtectedRoute>
//               <AppLayout layoutType="sidebarOnly">
//                 <Customers />
//               </AppLayout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/Products"
//           element={
//             <ProtectedRoute>
//               <AppLayout layoutType="sidebarOnly">
//                 <Products />
//               </AppLayout>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

