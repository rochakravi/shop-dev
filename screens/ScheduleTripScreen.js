import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, ImageBackground, View, Dimensions,  } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import ReactNativeDatesDemo from './dateRange';

import { MonoText } from '../components/StyledText';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function ScheduleTripScreen({route, navigation}) {
    const { destination } = route.params;
  return (
    
     <ImageBackground source={{ uri: 'https://source.unsplash.com/1024x768/?mumbai' }}
        style={styles.image}
     >
        <View style={styles.container} >
        <View><Text style={styles.whereTo}>{destination}</Text></View>
        <View style={styles.weather}>
            <View>
                <Ionicons
                    name="md-cloudy"
                    size={32}
                    color="white" 
                />
            </View>
            <View >
                <Text style={{color : 'white'}}>WEATHER NOW</Text>
                <Text style={{color : 'white'}}>32 c Light Rain</Text>
            </View>
        </View>
        <View><Text style={styles.description}>Mumbai is the capital city of indian state Maharashtra, is a spectacular paradox of chaos and hope, glamour and squalor, modernity and tradition. Famously known as the City of Dreams. </Text></View>
        <View style={styles.tourGallery}>
              
        </View>
        <View style={styles.scheduleTrip}><Text>SCHEDULE TRIP</Text></View>
        
        </View>

     </ImageBackground>
    
     
 
  );
}

ScheduleTripScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,       
    }, 
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 180,     
    },
    whereTo : {
        color : 'white',
        fontSize : 35
    },
    weather : {
        flex : 1, 
        flexDirection : 'row',
    },
    description:{
      flex: 2,
      color: 'white',
      padding : 40      
    },
    tourGallery: {
        color: 'white',
        flex: 1,
        flexDirection: 'row'
    },
    galleryBtn: {
        color: 'white'
    },
});
