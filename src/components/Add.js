import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

class Add extends Component {
 
    minDate = new Date().toISOString().slice(0,10);
    state = {
        text: '',
        date: this.minDate,  
    }
   
    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        });
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });    
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('click');
        const {text, date} = this.state
        if(text.length > 0) {
            const add = this.props.add(text, date);
        if(add) {
            this.setState({
                text: '',
                date: this.minDate,
            })
        }
        } else {
            alert('Brak nazwy zadania!')
        }
        
    }
    render() {
        return(
            <section className="add_task">
                <form className="task_form">
                    <label htmlFor="title"> Dodaj zadanie</label>
                    <input type="text" name="title" id="title" placeholder="Nazwa zadania" value={this.state.text} onChange={this.handleChange}/>
                    <label htmlFor="date"></label>
                    <input type="date" value={this.state.date} min={this.minDate} onChange={this.handleDateChange} style={{width: '50%'}}/>
                    <MDBBtn color="unique" style={{width: '50%', margin: "10px 0"}} type='submit' onClick={this.handleClick}>Dodaj</MDBBtn>
                </form>
            </section>
        )
    }
}

export default Add;
