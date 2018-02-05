import {eventDispatcher} from './event-dispatcher.js';

export default function example(){
  eventDispatcher.registerHandler("test-event", function(){
    console.log("Event dispatch working correctly");
  })

  return "Hello World!";
}
