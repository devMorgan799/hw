import React, { Component } from 'react';

function Hobbies(props) {
        return (
            <div>
            <h1>my favorite hobby is {props.name} at {props.place}</h1>
            <h1>my fav hobby is backpacking</h1>
            <h1>cooking</h1>
            </div>
        );
}

export default Hobbies;