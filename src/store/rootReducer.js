import { combineReducers } from 'redux';

import Albums from '@albums/list/reducers';
// Our app reducers
// We need to import each one here and add them to the combiner at the bottom

// Combine all
const rootReducer = combineReducers({
  Albums
});

export default rootReducer;
