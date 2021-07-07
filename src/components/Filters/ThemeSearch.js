import { Component } from 'react';
import Select from 'react-select';

const options = [
    {value: 'Birthday', label: 'Birthday'},
    {value: 'Encouragement', label: 'Encouragement'},
    {value: 'Wedding', label: 'Wedding'},
    {value: 'Anniversary', label: 'Anniversary'},
    {value: 'Thank You', label: 'Thank You'},
    {value: 'Get Well', label: 'Get Well'},
    {value: 'Congratulations', label: 'Congratulations'},
    {value: 'Invitation', label: 'Invitation'},
    {value: 'Housewarming', label: 'Housewarming'}
    ];
  
    class ThemeSearch extends Component {
  
      state = {
         theme: null
      };
  
      handleChange = theme => {
            this.setState({ theme }, () =>
            this.props.filterChange(theme)
    );
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


