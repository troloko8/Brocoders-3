import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './state'
import {renderEntireTree} from './redux'



renderEntireTree(state);

serviceWorker.unregister();
