import React, { Component } from "react";
import { Consumer } from "../../context";
// import uuid from "uuid";
import axios from 'axios';

import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  componentDidMount () {
      const {id} = this.props.match.params;
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then (res => {
            const contact = res.data;
            this.setState({
                name: contact.name,
                email: contact.email,
                phone: contact.phone
            })
        })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Check for Errors
    if(name===''){
        this.setState({
            errors: {name: 'Name field is required'}
        })
        return;
    }
    if(email===''){
        this.setState({
            errors: {email: 'Email field is required'}
        })
        return;
    }

    if(phone===''){
        this.setState({
            errors: {phone: 'Phone field is required'}
        })
        return;
    }

    const updateContact = {
        name,
        phone,
        email
    }

    const {id} = this.props.match.params;
        axios
            .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
            .then(res => {
                dispatch({type: 'UPDATE_CONTACT', payload: res.data})
            })
    

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push('/');
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    type="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
