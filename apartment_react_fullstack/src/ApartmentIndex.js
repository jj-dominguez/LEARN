import React, { Component } from 'react';
import ApartmentsList from './store/ApartmentsList';
import {Link} from 'react-router-dom';


class ApartmentIndex extends Component {
  componentWillMount(){
      this.setState({apartments: ApartmentsList})
  }

  render() {
    let list = this.state.apartments.map(function(apartment){
        return(
            <li key={apartment.id}>
                <Link to={`/apartments/${apartment.id}`} >
                    <img class="thumbnails" src={apartment.image} />
                </Link>
            </li>
        )
    })

    return (
      <div class='container'>
          <ul>
              {list}
          </ul>
      </div>
    );
  }
}

export default ApartmentIndex;


// <% for (var key in jokes) { %>
//     <li>
//         <a href='/jokepage/<%= key %>'>
//             <img class="thumbnails" src='<%= jokes[key]['image'] %>' />
//         </a>
//     </li>
// <% } %>
