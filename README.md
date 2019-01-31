# Tiny React Apps

When learning a new technology, especially frameworks, beginners often fall in the trap of trying to bit more than they can chew. To learn React, instead of writing one fully-featured application, we propose building several tiny applications that implement simple ideas. The component-based nature of React plays really well with this approach, tiny applications can be as small as a single component or they can later become part of a bigger application. Either way, you'll get tons of practice by being exposed to different problems and patterns.

Tiny applications should be achievable goals, small projects that you can start and finish in a matter of days and you can potentially improve or scale later. Finishing a project, no matter how small, will give you momentum and the boost of confidence that you need to keep developing your skills. The quote generator we constructed in the lecture is an example of a small, achievable project.

Another great benefit of building several tiny apps is that you get to show future employers a wider range of skills by choosing to use different libraries and approaches.

## Ideas

If you're not feeling too confident, we recomment building the an **Emoji Search app** that renders a list of emojis and allows you to search and filter by name and keywords. Use the [provided JSON file](https://github.com/northcoders/FE-tiny-react-apps/blob/master/src/data/emojiList.json) as your source of data. This isn't too different to the quote generator, but you will need to think about how to control what you display without altering your original data.

**Hint:** The key to the filter functionality lies on the `onChange` event handler for the input element.

### Other ideas

Constrain yourself to just 1 or 2 features. Only think about extending your app after implementing the core idea. Think of a common problem that you face daily or an app on your phone that you don't quite like how it works. What could you do better?

1. Noughts and Crosses. Track scores - could you make this so you could programmatically make different size boards?

2. Recipe idea generator: plug in some ingredients and get a random algorithmically created method. 

3. Hangman. Choose from different categories, keep track of scores... how will you represent it graphically? (You could look into svg, html5 canvas, or just find some images online)

4. A resource management game - have a look at [Universal Paperclips](http://www.decisionproblem.com/paperclips/index2.html) for inspiration (think how you will need to use setTimeout / setInterval).

5. Build a **Calculator app** that replicates the functionality and looks of your operating system's calculator. You could head into scientific territory if you feel brave...

## Instructions

We've attached a checklist that applies to all React project development. There will be a few things you don't know about yet so you can ignore those steps; for now, the most important things to think about are planning out your app, then constructing a static version with no method or functionality, then making it do stuff!

REMEMBER: Commit changes after finishing a meaningful unit of work (a component, a feature of functionality, a successful refactor) never hurt anyone.

If you move on to a second app or beyond, use [create-react-app](https://github.com/facebook/create-react-app) to bootleg your project. We recommend you do this with `npx create-react-app <project-name>` - this means you don't need to globally install create-react-app and risk it becoming outdated. [More on npx](https://www.npmjs.com/package/npx).

## Credits
The idea for React tiny apps comes from the following articles by Andrew Farmer:

- http://andrewhfarmer.com/tiny-unique-app/
- http://andrewhfarmer.com/tiny-app-ideas/
- http://andrewhfarmer.com/sample-apps-create-react-app/

