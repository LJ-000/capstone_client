import { Component } from 'react';
import Select from 'react-select';

// const card_url = "http://localhost:3000/api/v1/cards";

const options = [
  {value: 'Funny', label: 'Funny'},
  {value: 'Birthday', label: 'Birthday'},
  {value: 'Encouragement', label: 'Encouragement'},
  {value: 'Wedding', label: 'Wedding'},
  {value: 'Thank You', label: 'Thank You'},
  {value: 'Get Well', label: 'Get Well'},
  {value: 'Congrats', label: 'Congrats'},
  {value: 'Invitation', label: 'Invitation'}
  ];

  class ThemeSearch extends Component {

    state = {
        theme: null
    };

    // componentDidMount() {
    //     fetch(card_url)
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //          card: data,
    // }
    // )
    //     );
    // }

    handleChange = theme => {
            this.setState({ theme });
    };

    render() {
        const { theme } = this.state;
    return (
    <div className="theme_search">
    <h3>Select the event theme</h3>
    <Select
        value={theme}
        options={options} 
        onChange={this.handleChange}
        />
    </div>
        );
    }
}

export default ThemeSearch

// Funny
// Birthday
// Encouragement
// Wedding 
// Thank You
// Get Well
// Congrats
// Invitation 

