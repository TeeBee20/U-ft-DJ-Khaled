# Tiny React Apps

When learning a new technology, especially frameworks, beginners often fall in the trap of trying to bit more than they can chew. To learn React, instead of writing one fully-featured application, we propose building several tiny applications that implement simple ideas. The component-based nature of React plays really well with this approach, tiny applications can be as small as a single component or they can later become part of a bigger application. Either way, you'll get tons of practice by being exposed to different problems and patterns.

Tiny applications should be achievable goals, small projects that you can start and finish in a matter of days and you can potentially improve or scale later. Finishing a project, no matter how small, will give you momentum and the boost of confidence that you need to keep developing your skills.

Another great benefit of building several tiny apps is that you get to show future employers a wider range of skills by choosing to use different libraries and approaches.

## Day 1

1. Start by building an **Emoji Search app** that renders a list of emojis and allows you to search and filter by name and keywords. Use the [provided JSON file](https://github.com/northcoders/w08-tiny-react-apps/blob/master/emojiList.json) as your source of data.

**Hint:** The key to the filter functionality lies on the `onChange` event handler for the input element.

2. Build a **Random Quote Generator** app that displays a quote (you get to choose the topic!) and on the user's input changes to another randomly selected quote. You can extend this app by adding filters by topic or author of quotes. Spend some time styling your application to match your theme.

## Day 2

Build a **Calculator app** that replicates the functionality and looks of your operating system's calculator. It should be able to at least perform the 4 basic mathematical operations but you could go build a scientific calculator if you feel up to the challenge.

Since you are going to have to render a lot of buttons, this is a great application to practice writing reusable components. 

Spend some time playing with the actual calculator you are trying to copy and try to reverse engineer how it manages its state.

## More ideas for apps

Constrain yourself to just 1 or 2 features. Only think about extending your app after implementing the core idea. Think of a common problem that you face daily or an app on your phone that you don't quite like how it works. What could you do better?

1. Dictionary app: use a JSON file as your source of data (like the one from [here](https://github.com/adambom/dictionary))

2. Grocery list app: like a To Do list but with support for grouping items by recipe and different quantities (with different units!). You could add features like reusing lists. This is a good app to learn about `localStorage` to stor application data without a server.

3. Personal budget tool: import bank transactions from your bank (probably as a .csv file) parse it to JSON and then write an app that lets you search, sort and filter them.

4. Noughts and Croses game

5. Basic calendar app

6. Image gallery app

7. Recipe search app

8. Hangman game

9. [Universal Paperclips](http://www.decisionproblem.com/paperclips/index2.html) clone <--- Mauro's favourite

## Instructions

1. Copy-paste the provided `template` directory to start a new app fresh.
2. Spend some time designing your app visually, draw it on paper to inform what HTML elements you'll need and how they'll be laid out.
3. Roughly determine what parts of your design should be components (this can change later as you build them). Think about what HTML elements have meaning together and can be grouped.
4. Write static/hardcoded components as the skeleton of your app.
5. Identify the state of your whole application: the minimal amount of information you would need to "turn off" your application, "turn it on" again a have it in the same state. Like saving and loading in a videogame. Represent it as one JS object and decide where it should be stored (your top level component is a good first guess on a tiny app)
6. Start making your app dynamic by passing data from state as props to other components and rendering dynamic lists instead of hardcoded copies of components.
7. Add user input functionality to your app by implementing event handlers on buttons and form elements. Remember: data can only flow from parents to children. If a child component needs to send data to its parent, then its parent needs to give it a function as a prop to do this.
8. Style your application (or leave it as it is, brutalism is in!)

## Notes
- Committing changes after finishing a meaningful unit of work (a component, a feature of functionality, a successful refactor) never hurt anyone
- If your main JS file is getting too big you can always create more files and link them on your `index.html` the same way as the first one. Keep in mind that files are loaded in the order they are written, so if you need a variable from file A in file B, file A should come first.
- The browser environment is different to Node.js. Currently there's no native support for importing/exporting from files. Variables and functions that you define in different files and load into one HTML file are all available globally. We'll address the disadvantages of this way of organising code and solutions to it.

## Credits
The idea for React tiny apps comes from the following articles by Andrew Farmer:

- http://andrewhfarmer.com/tiny-unique-app/
- http://andrewhfarmer.com/tiny-app-ideas/
- http://andrewhfarmer.com/sample-apps-create-react-app/

