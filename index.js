/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './Componentes/iniciomusica';
import Registro from './Componentes/registro';

AppRegistry.registerComponent(appName, () => Registro);
