
Probleme occured when trying to deploy on the docker-machine, and in local-machine with the cross-origin problem 

121.0.0.1/ not working

but 

http://192.168.99.100:5001/ working (jinja template rendered directly communicating with the backend)


VM9425:164 WebSocket connection to 'ws://192.168.99.100/sockjs-node/219/rcfa0uav/websocket' failed: Error during WebSocket handshake: Unexpected response code: 400
WrappedWebSocket @ VM9425:164
WebSocketBrowserDriver @ websocket.js:6
WebSocketTransport @ websocket.js:32
./node_modules/sockjs-client/lib/main.js.SockJS._connect @ main.js:219
./node_modules/sockjs-client/lib/main.js.SockJS._receiveInfo @ main.js:193
g @ emitter.js:30
./node_modules/sockjs-client/lib/event/emitter.js.EventEmitter.emit @ emitter.js:50
(anonymous) @ info-receiver.js:67
g @ emitter.js:30
./node_modules/sockjs-client/lib/event/emitter.js.EventEmitter.emit @ emitter.js:50
(anonymous) @ info-ajax.js:37
g @ emitter.js:30
./node_modules/sockjs-client/lib/event/emitter.js.EventEmitter.emit @ emitter.js:50
xhr.onreadystatechange @ abstract-xhr.js:124
View.js:44 

Uncaught DOMException: Blocked a frame with origin "http://192.168.99.100" from accessing a cross-origin frame.
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/View.js:44:28
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/View.js:809:3
(anonymous) @ View.js:44
(anonymous) @ View.js:809
ContentSelector.js:140 

Uncaught DOMException: Blocked a frame with origin "http://192.168.99.100" from accessing a cross-origin frame.
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/ContentSelector.js:140:25
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/ContentSelector.js:210:3
(anonymous) @ ContentSelector.js:140
(anonymous) @ ContentSelector.js:210
VM9800 View.js:44 

Uncaught DOMException: Blocked a frame with origin "http://192.168.99.100" from accessing a cross-origin frame.
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/View.js:44:28
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/View.js:809:3
(anonymous) @ VM9800 View.js:44
(anonymous) @ VM9800 View.js:809
VM9803 ContentSelector.js:140 

Uncaught DOMException: Blocked a frame with origin "http://192.168.99.100" from accessing a cross-origin frame.
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/ContentSelector.js:140:25
    at chrome-extension://ihbdojmggkmjbhfflnchljfkgdhokffj/js/content/ContentSelector.js:210:3
(anonymous) @ VM9803 ContentSelector.js:140
(anonymous) @ VM9803 ContentSelector.js:210