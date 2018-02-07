
function EventDispatcher () {
    'use strict';
    var events = [];

    function addEvent(eventName, scopeId) {
        var event = typeof (scopeId) !== 'undefined' && typeof (scopeId) == 'string' ? scopeId + eventName : eventName;

        if (typeof (events[event]) === 'undefined') {
            events[event] = [];
        }
    }

    function clearEvent(eventName, scopeId) {
        var event = typeof (scopeId) !== 'undefined' && typeof (scopeId) == 'string' ? scopeId + eventName : eventName;
        events[event] = [];
    }

    function registerHandler(eventName, handler, scopeId) {
        var event = typeof (scopeId) !== 'undefined' && typeof (scopeId) == 'string' ? scopeId + eventName : eventName;
        addEvent(eventName, scopeId);
        events[event].push(handler);
    }

    function deregisterHandler(eventName, handler, scopeId) {
        var event = typeof (scopeId) !== 'undefined' && typeof (scopeId) == 'string' ? scopeId + eventName : eventName;
        var index = events[event].indexOf(handler);

        if (index !== -1) {
            events[event].splice(index, 1);
        }
    }

    function dispatch(eventName, arg, scopeId) {
        var dispatchSuccessful = false;
        var event = typeof (scopeId) !== 'undefined' && typeof (scopeId) == 'string' ? scopeId + eventName : eventName;

        if (typeof (events[event]) !== 'undefined') {

            for (var i = 0; i < events[event].length; i++) {
                events[event][i](arg);
            }

            if(events[event].length > 0){
                dispatchSuccessful = true;
            }
        }

        return dispatchSuccessful;
    }

    return {
        addEvent: addEvent,
        clearEvent: clearEvent,
        registerHandler: registerHandler,
        deregisterHandler: deregisterHandler,
        dispatch: dispatch
    };

};

export let eventDispatcher = new EventDispatcher();
