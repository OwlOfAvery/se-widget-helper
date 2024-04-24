import { widgetLoadHandler } from './utils/widget-load-handler.js'
import { eventReceivedHandler } from './utils/event-received-handler.js'
import { sessionUpdateHandler } from './utils/session-update-handler.js'

window.addEventListener('onWidgetLoad', function (event) {
	// onWidgetLoad logic
	widgetLoadHandler(event)
})

window.addEventListener('onEventReceived', function (event) {
	// onEventReceived logic
	eventReceivedHandler(event)
})

window.addEventListener('onSessionUpdate', function (event) {
	// onSessionUpdate logic
	sessionUpdateHandler(event)
})
