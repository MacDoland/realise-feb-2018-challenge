import example from './example.js';
import {eventDispatcher} from './event-dispatcher.js';

(function(){
  console.log(example());
  eventDispatcher.dispatch('test-event');
})();
