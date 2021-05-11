import ControllerChange from './change/controllerChange.js';
import ControllerDates from './dates/controllerDates.js';
import ControllerFavorites from './favorites/controllerFavorites.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const dates = new ControllerDates(publisher);
const favs = new ControllerFavorites(publisher);
const change = new ControllerChange(publisher);