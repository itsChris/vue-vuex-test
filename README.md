# vue-vuex-test

## Question 

Vuex - Is there any documentation for the code examples?  

In particular i am interested in how to implement a _two way binding of forms_ with vue 3 and vuex 4 - the examples in the documentation (https://next.vuex.vuejs.org/guide/forms.html#two-way-computed-property) with getters and setters is in my opinion a base but in a real-world application with complex objects this will lead to too much lines of code. (also i'm using nested object properties..)  
I have read a lot (cloning state into a local object using copy and deepcopy), i know the vuex documentation practically by heart regarding this topic. i have used https://github.com/maoberlehner/vuex-map-fields but would like to avoid dependencies as much as possible. I implemented a BeforeRouteEnter Guard, where i load the state of the component before it's being created but this still does not solve the binding of the form with direct access to the state in the store..  
In the vuex 4 (branch 4.0!) code examples there is the example of the chat application https://github.com/vuejs/vuex/tree/4.0/examples/composition/chat. i tried to understand this, but i always fail at the same place -> when the component is loaded with the form binding, i get the following error messages: 

```javascript
runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Property "car" was accessed during render but is not defined on instance. 
  at <Test> 
  at <App>
warn @ runtime-core.esm-bundler.js?5c40:38
runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Unhandled error during execution of render function 
  at <Test> 
  at <App>
warn @ runtime-core.esm-bundler.js?5c40:38
runtime-core.esm-bundler.js?5c40:217 Uncaught TypeError: Cannot read property 'id' of undefined
    at Proxy.render (Test.vue?864c:14)
    at renderComponentRoot (runtime-core.esm-bundler.js?5c40:846)
    at componentEffect (runtime-core.esm-bundler.js?5c40:4280)
    at reactiveEffect (reactivity.esm-bundler.js?a1e9:42)
    at effect (reactivity.esm-bundler.js?a1e9:17)
    at setupRenderEffect (runtime-core.esm-bundler.js?5c40:4263)
    at mountComponent (runtime-core.esm-bundler.js?5c40:4222)
    at processComponent (runtime-core.esm-bundler.js?5c40:4182)
    at patch (runtime-core.esm-bundler.js?5c40:3791)
    at componentEffect (runtime-core.esm-bundler.js?5c40:4298)

````
I pushed my test code into this repository: 

https://github.com/itsChris/vue-vuex-test


