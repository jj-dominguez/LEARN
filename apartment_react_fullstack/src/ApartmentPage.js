import React, { Component } from 'react';
import ApartmentsList from './store/ApartmentsList.js';
import {Link} from 'react-router-dom';
import './App.css';


class ApartmentPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: ApartmentsList
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id
        this.setState({apartmentId: id})
        let apartment = this.state.apartments.find(function(listing){
            return listing.id === parseInt(id)
        })
        if(apartment){
            this.setState({apartment: apartment})
        }
    }

    render() {
        return(
            <div>

                <h2>{this.state.apartment.name}</h2>

                <img class="apartmentPic" src={`${this.state.apartment.image}`} />

                <h3>Apartment Details</h3>
                <p>{this.state.apartment.sqft} square feet</p>
                <p>{this.state.apartment.Availability}</p>

                <img class="layout" src={`${this.state.apartment.layout}`} />

                <br/>
                <br/>
                <Link to='/'> Home </Link>
                <br/>
                <br/>

            </div>
        );
    }

}

export default ApartmentPage;
