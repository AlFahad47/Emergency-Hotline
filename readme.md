Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
   Answer: getElementById is used to get a single element by using the id attribute. getElementsByClassName get a collection of elements with a specific class name. querySelector get the first element with matching css selector. querySelectorAll get all the elements with matching css selector.

2. How do you **create and insert a new element into the DOM**?  
   Answer:To create and insert new element into the DOM, first we will use document.createElement() to create a new element. then we have to add content to it . we can use textContent, innerHTML, or other properties. if we want we can add attribute or class to classList. Then we have to insert the element we have created to an existing element. there are several method for this. for example we can use appendChild() .

   example:
   const para = document.createElement("p");
   para.innerHTML = "This is an example.";
   document.getElementById("my-div").appendChild(para);

3. What is **Event Bubbling** and how does it work?  
   Answer:Event bubbling is a mechanism where event triggered on child element then it propagates upward through it parent element to the root of the DOM.

   how it works: when a event is fired on an element (for example a click). the event is handled by it event listener. then “bubble up” to its parent, grandparents, ancestors, to the DOM. triggering every event listener attached to the element's ancestors to the DOM or stopped earlier.

4. What is **Event Delegation** in JavaScript? Why is it useful?  
   Answer: Event Delegation is a javascript technique where attach a single event listener to a parent element to handle events triggared by its children elements. This single event listener takes advantage of event bubbling. This is usefull becouse isnstade of using multiple event listner in multiple child element we can use event delegation, which use event bubbling to catch child element event (for example click). Then, using event.target to check which child element triggered the event. so it saves memory and performance. and even we and new child element the single event listner on parent element work for them so it can handle dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?  
   Answer:preventDefault() prevents the browser default behavour for an event but dont stop the event from propagating. This uses to stop actions, like form submision when user click submit button , link navigation to URL or prevent checkbox toggling. where stopPropagation() this stops event from continuing to propagate through the event capturing and bubbling phases. this used for preventing parent element event listner from being triggered by the propagation of child element event fire.

   so we can say , preventDefault() stops browser default action, and stopPropagation() stops event from propagating.
