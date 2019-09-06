import React from 'react';
import { MDBBtn } from "mdbreact";

const Task = (props) => {

    const {text, date, id, active, finishDate} = props.task;
    const btnStyle = {
        width: '70px', height: '35px', margin:"10px 10px 0 0", padding: 0, fontSize: "10px" 
    }
    const textStyle = {
        fontSize: "15px",
        margin: 0,
    }

    if(active) {
    return(
        <div>
            <p style={textStyle}>{text}</p>
            <p style={textStyle}>Data rozpoczęcia: {date}</p>
            <MDBBtn style={btnStyle} color='unique' onClick={() => props.change(id)}>Zakończ</MDBBtn>
            <MDBBtn style = {btnStyle} color='amber' onClick={() => props.delete(id)}>Usuń</MDBBtn>
        </div>
    );
} else {
    return(
        <div>
            <p style={textStyle}>{text}</p>
            <p style={textStyle}>Data rozpoczęcia: {date}</p>
            <p style={textStyle}>Data zakończenia: {finishDate}</p>
            <MDBBtn style = {btnStyle} color='amber' onClick={() => props.delete(id)}>Usuń</MDBBtn>
        </div>
        ) 
    }
}

export default Task;