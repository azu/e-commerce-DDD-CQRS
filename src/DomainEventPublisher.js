// LICENSE : MIT
"use strict";
import {EventEmitter} from "events";
export class DomainEventPublisherCore extends EventEmitter {
    subscribeTo(eventName, handler) {
        this.on(eventName, handler);
    }

    publish(eventName, payload) {
        this.emit(eventName, payload)
    }
}

// singleton as default
export default new DomainEventPublisherCore()