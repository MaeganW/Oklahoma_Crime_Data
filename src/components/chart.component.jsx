import React, { Component } from 'react';
import * as c3 from 'c3';
import { filter } from 'lodash';

import data from '../data/okCrimeData.json';

class Chart extends Component {
  componentDidMount() {
    this.initChart();
  }

  myData = data.slice(5,225);
  byPopArr = filter(this.myData, (d) => d.FIELD2.length > 5);

  cities = this.byPopArr.map((d) => d.FIELD1);

  population1 = this.byPopArr.map(d => d.FIELD2.replace(/\,/g,""));
  population = this.population1.map((d) => Number.parseInt(d));

  arson1 = this.byPopArr.map(d => d.FIELD13.replace(/\,/g,""));
  arson = this.arson1.map((d) => Number.parseInt(d));

  burglary1 = this.byPopArr.map(d => d.FIELD10.replace(/\,/g,""));
  burglary = this.burglary1.map((d) => Number.parseInt(d));

  vehicleTheft1 = this.byPopArr.map(d => d.FIELD12.replace(/\,/g,""));
  vehicleTheft = this.vehicleTheft1.map((d) => Number.parseInt(d));

  propertyCrime1 = this.byPopArr.map(d => d.FIELD9.replace(/\,/g,""));
  propertyCrime = this.propertyCrime1.map((d) => Number.parseInt(d));

  robbery1 = this.byPopArr.map(d => d.FIELD7.replace(/\,/g,""));
  robbery = this.robbery1.map((d) => Number.parseInt(d));

  larceny1 = this.byPopArr.map(d => d.FIELD11.replace(/\,/g,""));
  larceny = this.larceny1.map((d) => Number.parseInt(d));

  violentCrime1 = this.byPopArr.map(d => d.FIELD3.replace(/\,/g,""));
  violentCrime = this.violentCrime1.map((d) => Number.parseInt(d));

  murder1 = this.byPopArr.map(d => d.FIELD4.replace(/\,/g,""));
  murder = this.murder1.map((d) => Number.parseInt(d));

  aggravatedAssault1 = this.byPopArr.map(d => d.FIELD8.replace(/\,/g,""));
  aggravatedAssault = this.aggravatedAssault1.map((d) => Number.parseInt(d));

  rape1 = this.byPopArr.map(d => d.FIELD5.replace(/\,/g,""));
  rape = this.rape1.map((d) => Number.parseInt(d));

  initChart(){
    const chart = c3.generate({
      bindto: '#chart',
      size: {
        height: 600,
        width: 1300
      },
      data: {
        columns: [
          ['Burglary', ...this.burglary],
          ['Property Crime', ...this.propertyCrime],
          ['Vehicle Theft', ...this.vehicleTheft],
          ['Larceny', ...this.larceny],
          ['Robbery', ...this.robbery],
          ['Murder', ...this.murder],
          ['Arson', ...this.arson],
          ['Violent Crime', ...this.violentCrime],
          ['Aggravated Assault', ...this.aggravatedAssault],
          ['Rape', ...this.rape]
        ],
        groups: [
          ['Property Crime', 'Burglary', 'Vehicle Theft', 'Larceny', 'Robbery']
        ],
        type: 'bar',
        types: {
          Population: 'line'
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: this.cities,
          tick: {
            rotate: 75,
            multiline: false
          }
        },
        y: {
          label: {
            text: 'Number of Incidents',
            position: 'outer-middle'
          }
        },
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      padding: {
        top: 20,
        bottom: 20,
      }
    });
  }

  render() {
    console.log(data);
    console.log(this.byPopArr);
    console.log(this.robbery)
    return (
      <div>
        <br/>
        <br/>
        <div id="chart"></div>
      </div>
    );
  }
}

export default Chart;