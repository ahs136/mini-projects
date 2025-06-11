# mini-projects
Repository for mini projects to track my learning while developing the WorkFlow MVP 
## Toggle Theme
After 2 weeks of beginning MVP development and refreshing on HTML and CSS, I decided to start working on a couple mini-projects to assess my learning. The most recent topics I learned were JavaScript arrow keys, DOM manipulation, object notation, and local storage, however I chose to start with a very simple project to also make sure that I was comfortable with applying styles.


The process of creating an HTML file with a button (for toggling the theme), sample text, and corresponding classes and containers was quite simple. I was also able to use my knowledge of flexbox to center my text. I did struggle a bit with adding styling to my containers as I accidentally nested my sample text inside of the container for my button, meaning that its styling was overridden. Thankfully, a simple google search resolved my issue. 


After writing styling for the body and button I created a second version of both with a ‘.dark’ extension.  After that I was ready to add the JavaScript functionality. Toggling the theme only required one simple function. First, I used a getElementById to retrieve the toggle-theme button. I then set up an EventListener for a ‘click’ and used an arrow function to toggle the class of dark inside of the body element. I had learned about simple built-in functions such as toggle through YouTube tutorials on JavaScript and DOM.


Overall, this was a simple first project to refresh on all of the topics I had learned involving web design.
## ToDo List
This project took me 2-3 hours and expanded upon what I learned in my toggle theme project by designing the webpage with HTML and CSS, but required much more proficiency in JavaScript. I did struggle at first with centering objects on my webpage, but eventually I got the hang of it, using span to create the delete button and offsetting it from the right and top end. Through this project, I gained a solid understanding of dynamic DOM manipulation and event handling. Initially, I worked with direct event listeners attached to individual elements, such as the delete buttons for each list item. However, I soon recognized the limitations of this approach, especially as new list items were dynamically added. I faced issues initially by not being careful with my syntax. When omitting the “All” when using querySelector I would sometimes end up only selecting the first list item and would fruitlessly edit my logic. Once I caught the issue, I commented out my previous method and made sure to include constant values such as list items inside of my event listeners. By refactoring my code to use event delegation (attaching a single event listener to the parent list element), I improved the efficiency and scalability of my code, ensuring that the delete functionality worked seamlessly for both existing and newly created items. This was a key step in making my code more maintainable and performant.


Additionally, I developed a search filter that updates the visible list items as the user types. From a previous JavaScript tutorial, I knew the importance of converting strings to lower/uppercase before comparing them. I experimented with different string matching methods, initially using .includes() but then refining it to .startsWith() to precisely match the strings rather than simply looking for included characters. I also learned the importance of retrieving the modified list of items within the event listener callback to accommodate dynamic changes, such as adding or deleting todos. Overall, this process deepened my understanding of how to manipulate the DOM efficiently, handle events dynamically, and create responsive, user-friendly interfaces.

## Weather App
To build this weather app, I started by setting up a clean and minimal HTML structure with semantic elements and unique IDs for easy JavaScript targeting. The goal was to focus primarily on practicing JavaScript concepts, so I used AI to quickly generate a functional CSS stylesheet. This let me save time on styling and prioritize learning dynamic DOM manipulation and API handling.


I began scripting with script.js, where I practiced calling the OpenWeather API, parsing the response, and logging the data to understand its structure. This gave me hands-on experience with fetch(), working with JSON, and handling errors from API responses.


Once the data fetch was working, I shifted to dynamic.js, where I implemented DOM creation logic to dynamically generate weather cards for each city entered. Each card includes the city name, temperature, weather description, and a delete button. I used append() to insert multiple elements efficiently, and added event listeners to handle removal of cards. This step took some trial and error with creating document elements such as headers and paragraphs, since previously i would simply edit the innertext of an existing div.


To ensure a better user experience, I also implemented duplicate detection logic, preventing users from searching the same city multiple times. Along the way, I learned to clear the search bar after each valid search and improved the visual layout with responsive CSS cards and interactive delete buttons.


This project deepened my understanding of JavaScript fundamentals like event handling, DOM manipulation, API requests, and dynamic UI updates.

##