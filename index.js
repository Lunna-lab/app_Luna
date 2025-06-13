/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './Componentes/App';
import Registro from './Componentes/registro';
import Tareas from './Componentes/Tareas';

AppRegistry.registerComponent(appName, () => Tareas);
