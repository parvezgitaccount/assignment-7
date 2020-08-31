import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Course/Course';
import { useState } from 'react';
import fakeCourse from '../src/fakeCourse/fakeCourse'
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';


function App() {
  const [courses, setCourse] = useState(fakeCourse);
  const [cart, setCart] = useState([])


  const handleAddEvent = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  return (
    <div className="app">
      <Header></Header>
      <div className = "container-fluid">
        <div className = "row">
          <div className = "row col-12 col-md-9 border-right mt-3">
            {
              courses.map(crs => <Course course = {crs} key = {crs.id} handleAddEvent = {handleAddEvent}></Course>)
            }
          </div>
          <div className = "row col-12 mx-auto col-sm-8 col-md-3 mt-3">
            {
              <Cart cart = {cart}></Cart>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
