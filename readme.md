Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
   Answer: getElementById is used to get a single element by using the id attribute. It is faster than others, as it is indexed by the browser. getElementsByClassName gets a collection of elements with a specific class name. That collection is called HTMLCollection, which updates automatically if DOM changes. querySelector gets the first element with matching CSS selector. querySelectorAll gets all the elements with matching CSS selector. This returns a NodeList, which does not update with changes of DOM.

   querySelector / querySelectorAll support complex queries; on the other hand, getElementById is for single and unique elements, and getElementsByClassName is for class-based selections.

2. How do you **create and insert a new element into the DOM**?  
   Answer:To create and insert a new element into the DOM, first we will use document.createElement() to create a new element. Then we have to add content to it. We can use textContent, innerHTML, or other properties. If we want, we can add attributes or classes to classList. Then we have to insert the element we have created into an existing element. There are several methods for this. For example, we can use appendChild().

   example:  
    const para = document.createElement("p");  
    para.innerHTML = "This is an example.";  
    document.getElementById("my-div").appendChild(para);

3. What is **Event Bubbling** and how does it work?  
   Answer:Event bubbling is a mechanism where an event triggered on a child element then propagates upward through its parent element to the root of the DOM.

   How it works: when an event is fired on an element (for example, a click). The event is handled by its event listener. then “bubble up” to its parent, grandparents, ancestors, to the DOM. triggering every event listener attached to the element's ancestors to the DOM or stopped earlier

4. What is **Event Delegation** in JavaScript? Why is it useful?  
   Answer: Event delegation is a JavaScript technique where we can attach a single event listener to a parent element to handle events triggered by its child elements. This single event listener takes advantage of event bubbling. This is useful because instead of using multiple event listeners in multiple child elements, we can use event delegation, which uses event bubbling to catch child element events (for example, clicks). Then, using event.target to check which child element triggered the event. so it saves memory and performance. And even if we add a new child element, the single event listener on the parent element works for them, so it can handle dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?  
   Answer:preventDefault() prevents the browser default behavour for an event but dont stop the event from propagating. This uses to stop actions, like form submision when user click submit button , link navigation to URL or prevent checkbox toggling. where stopPropagation() this stops event from continuing to propagate through the event capturing and bubbling phases. this used for preventing parent element event listner from being triggered by the propagation of child element event fire.

   so we can say , preventDefault() stops browser default action, and stopPropagation() stops event from propagating.
