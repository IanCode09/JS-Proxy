The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

A Proxy is created with two parameters:

target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

Syntax
let myProxy = new Proxy(target, handler)