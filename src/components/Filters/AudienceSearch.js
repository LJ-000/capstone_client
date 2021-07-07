import { Component } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
  
const options = [
    'Anyone',
    'Significant Other',
    'Wife',
    'Husband',
    'Friend',
    'Sister',
    'Brother',
    'Mom',
    'Dad',
    'Grandma',
    'Grandpa',
    'StepMom',
    'StepDad',
    'Aunt',
    'Uncle', 
    'GodMother',
    'GodFather',
  ];

  const defaultOption = options[0];

  class AudienceSearch extends Component {

    render() {
        return (
        <div className="audience_search">
        <h3>Select the audience</h3>
        <Dropdown options={options} onChange={this.onSelect} value={defaultOption}/>
        </div>
        )
    }
}

export default AudienceSearch