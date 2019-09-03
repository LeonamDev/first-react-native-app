import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './Main';
import Profile from './Profile'
import BtcPrice from './BtcPrice';

export default createAppContainer(
    createSwitchNavigator({
        Main,
        Profile,
        BtcPrice,
    })
);