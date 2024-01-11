/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import navigation from './Navigation';
import Apicall from './Apicall';
import App2 from './App2';
import { Provider } from 'react-redux';
import store from './Components/redux/Store';


const appredux=()=>(

    <Provider store={store}>
        <App2/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appredux);
