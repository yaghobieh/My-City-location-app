import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet
} from 'react-native';

import Tabs from './src/index';
const key = 'cities';

export default class App extends React.Component {
  state = {
    cities: []
  }

  async componentDidMount() {
    try {
      let cities = await AsyncStorage.getItem(key);
      this.setState({
        cities: JSON.parse(cities)
      });
    } catch (err) {
      console.log(err);
    }
  }

  addCity = city => {
    let cities = this.state.cities;
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(()=> console.log('Item stored'));
    this.setState({cities});
  }

  addLocation = (location, city) => {

    let index = this.state.cities.findIndex(item => {
      return item.id == city.id;
    });
    
    let choseCity = this.state.cities[index]; 
    choseCity.location.push(location);

    let cities = ({
      ...this.state.cities.slice(0, index),
      choseCity,
      ...this.state.cities.slice(index+1)
    });

    this.setState({cities}, () => {
      AsyncStorage.setItem(key, JSON.stringify(cities))
        .then(()=> console.log('Item stored'))
        .catch(err => console.log(err));
    });
  }

  render() {
    return (
      <Tabs 
        screenProps = {{
          cities : this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
        }}
      />
    )
  }
}