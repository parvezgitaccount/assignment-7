import React from 'react';
import './Course.css';


const Course = (props) => {
    const {img, name, price, mentor,} = props.course;
    const handleAddEvent = props.handleAddEvent;
    return (
            <div className = "col-sm-4 mb-2 card shadow border-0">
                <img src= {img} alt=""/>
                    <div className = "card-body">
                        <h5 className = 'card-title'> {name} </h5>
                        <p className = 'card-text'> {mentor}</p>
                        <h6 className = 'card-text'>$ {price} </h6>
                        <button className = "btn btn-primary" onClick = {() => handleAddEvent(props.course)}> Enroll </button>
                    </div>
            </div>
    );
};

export default Course;