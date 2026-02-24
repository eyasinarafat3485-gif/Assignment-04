1. Ans: (i) getElementID is selects a single elemet by its inique ID.
(ii) getElementsByClassName is selects all elements with a specific class name.
(iii) querySelector is selects only the first element that matches a CSS selector.
(iv) querySelectorAll is the all element that matches a CSS selector.

2. Ans: Need first document.createElement() for create a new tag in memory. Then element some text or a class name need add so it's not empty this. Finally, use appendChild() or append() need to attach it to an existing parent element like the body.

3. Ans: Event Bubbling is a concept in the Document Object Model (DOM) , array like object but not 100%. Event bubbling is the default behavior for most events in JavaScript. When we click on the innermost element, the event listener for that element fires first, the event then triggers handlers on the direct parent, then the grandparent, and continues to the root 

4. Ans: Event delegation is a design pattern in JavaScript used to handle events efficiently. When an event click happens on a child element, it "bubbles up" through its ancestors in the DOM tree. Attaching one listener instead of hundreds saves significant memory and improves performance.It centralizes event-handling logic in one place, making the code easier to maintain and debug. 

5. Ans: preventDefault() is stops the default action of an element and it does not stop the event from reaching other elements. But stopPropagation() it is stops the event from bubbling up the DOM tree to parent elements and strictly halts the journey of the event through the DOM,