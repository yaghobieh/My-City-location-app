import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableWithoutFeedback 
} from 'react-native';
import { colors } from '../theme';
 
export default class Cities extends React.Component {
    static navigationOptions = {
        title: 'Cities',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400',
        }
    }
    
    viewCity = city => {
        this.props.navigation.navigate('City', { city });
    }

    render() {
        return (
            <ScrollView>
                <View>
                   {
                    this.props.screenProps.cities.map((city, index) => {
                        return (
                           <View key={index}>
                               <TouchableWithoutFeedback 
                                onPress={() => this.viewCity(city)}>
                                <View style={styles.citiesContainer}>
                                    <Text style={styles.city}>{city.city}</Text>
                                    <Text style={styles.country}>{city.country}</Text>
                                </View>
                               </TouchableWithoutFeedback>
                           </View>
                        )
                       })
                   }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    citiesContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 25
    },
    country: {
        color: 'rgba(0,0,0, 0.5)'
    } 
});