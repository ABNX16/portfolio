// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import Portfolio from './cc/Portfolio2'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Portfolio2 from './cc/Portfolio2'
import Skills from './cc/Skills'
import Works from './cc/Works'
import Nav from './cc/Nav'
import About from './cc/About'
import ContactForm from './cc/Contact'
import Footer from './cc/Footer'
import Footer2 from './cc/Footer2'
import Calculator from './cc/Calculator'
import Apt from './cc/Apt'
import Count from './cc/Count'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Portfolio2/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skills/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/home' element={<Portfolio2/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
          <Route path='/nav' element={<Nav/>}/>
          <Route path='/footer2' element={<Footer2/>}/>
          <Route path='/cal' element={<Calculator/>}/>
          <Route path='/apt' element={<Apt/>}/>
          <Route path='/cot' element={<Count/>}/>





        </Routes>
      </Router>
     
    </div>
  )
}

export default App

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// function App() {
//   return (
//     <div>
//         <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// import Portfolio2 from './cc/Portfolio2'

// function App() {
//   return (
//     <div>
//    <Portfolio2/>
//     </div>
//   )
// }

// export default App

