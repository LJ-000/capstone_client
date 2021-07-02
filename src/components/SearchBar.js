import { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'

class SearchBar extends Component {

    render() {
        return (

<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Birthday</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Encouragement</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Thank You</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Wedding</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Congratulations</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Invitation</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Get Well</Dropdown.Item>


</DropdownButton>

        )
    }
}

export default SearchBar

// Funny
// Birthday
// Encouragement
// Wedding 
// Thank You
// Get Well
// Congrats
// Invitation 
