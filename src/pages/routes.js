import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './Main';
import Profile from './Profile'

export default createAppContainer(
    createSwitchNavigator({
        Main,
        Profile,
    })
);