import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Page1 from '../screens/page1';
import Page2 from '../screens/page2';
import Page3 from '../screens/page3';
import Page33 from '../screens/page33';
import Page4 from '../screens/page4';

const screens = {
    Page1:{
        screen : Page1,
        navigationOptions : {
            title : '',
            headerStyle : {
                backgroundColor : '#000',
                height : 10,
            },
        }
    },
    Page2:{
        screen : Page2,
        navigationOptions : {
            title : 'Select Direction',
            headerStyle : {
                backgroundColor : '#000',
                height : 80,
            },
            headerTintColor: '#fff'
        }
    },
    Page3:{
        screen : Page3,
        navigationOptions : {
            title : 'Select Station',
            headerStyle : {
                backgroundColor : '#000',
                height : 80,
            },
            headerTintColor: '#fff'
        }
    },
    Page33:{
        screen : Page33,
        navigationOptions : {
            title : 'Select Station',
            headerStyle:{
                backgroundColor : '#000',
                height : 80,
            },
            headerTintColor : '#fff'
        }
    },
    Page4:{
        screen : Page4,
        navigationOptions:{
            title : 'Select Train',
            headerStyle:{
                backgroundColor: '#000',
                height : 80,
            },
            headerTintColor : '#fff'
        }
    }
}

const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack); 