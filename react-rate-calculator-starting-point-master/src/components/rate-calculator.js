import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          dayRate: 0,
          hours: 1,
          hourlyRate: 10
        };
    }

    handleInputChange = (event) => {
      const newState = {};
      switch(event.target.id) {
        case 'day-rate':
          this.setState({dayRate: event.target.value});
        break;
        case 'hours':
          this.setState({hours: event.target.value});
        break;
      }

      this.setState({hourlyRate: this.getHourlyRate()});
    };

    getHourlyRate = () => {
      return (this.state.dayRate / this.state.hours);
    }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" changeHandler={this.handleInputChange} label="Day rate" min={0} max={5000} />
                <NumberInput id="hours" changeHandler={this.handleInputChange} label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={this.state.hourlyRate} />
            </form>
        );
    }
}

