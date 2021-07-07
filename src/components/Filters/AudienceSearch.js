import { Component } from 'react';
import Select from 'react-select';

const options = [
    {value: 'Anyone', label: 'Anyone'},
    {value: 'Significant Other', label: 'Significant Other'},
    {value: 'Wife', label: 'Wife'},
    {value: 'Husband', label: 'Husband'},
    {value: 'Friend', label: 'Friend'},
    {value: 'Sister', label: 'Sister'},
    {value: 'Brother', label: 'Brother'},
    {value: 'Mom', label: 'Mom'},
    {value: 'Dad', label: 'Dad'},
    {value: 'Grandma', label: 'Grandma'},
    {value: 'Grandpa', label: 'Grandpa'},
    {value: 'StepMom', label: 'StepMom'},
    {value: 'StepDad', label: 'StepDad'},
    {value: 'Aunt', label: 'Aunt'},
    {value: 'Uncle', label: 'Uncle'},
    {value: 'GodMother', label: 'GodMother'},
    {value: 'GodFather', label: 'GodFather'},
    {value: 'Teacher', label: 'Teacher'},
  ];

class AudienceSearch extends Component {

    state = {
        audience: null
    };

    handleAudience = audience => {
        this.setState({ audience }, () =>
        this.props.filterAudience(audience)
    );
      };

      render() {
          const { audience } = this.state;
      return (
      <div className="audience_search">
      <h3>Select the event audience</h3>
      <Select
          value={audience}
          options={options} 
          onChange={this.handleAudience}
          />
      </div>
          );
      }
  }

export default AudienceSearch

