# Planning

- [x] Outline the functionality of your app
- [x] Sketch the UI of your app
- [x] Break up the UI of your app into components
- [/] Name your components
- [x] Draw out the component hierarchy
- [x] Decide on what data your application will need to hold in state - this should be minimal with no duplication of data
- [x] For each piece of state determine which components will need access to that state - either to read or update it
- [x] Place the state in a component that is high enough on the tree for all required components to be able to access it. A good general rule is `As low as possible, but as high as necessary`
- [x] Repeat this for each piece of state

## Setup

- [x] Create your app directory (e.g. with create-react-app)
- [x] Run your app
- [x] Ensure you have React DevTools running (in browser)
- [x] Create a static render of blank components as per your hierarchy
- [x] Check everything is hooked up and the component tree is rendered

## Build components

- [x] Work on each component in turn. Generally starting high up the tree and working your way down works well.
- [x] Add the required state to your components and render that state correctly. (You can change the initial state manually to check it renders the way you want for now)
- [x] Once the state is rendered correctly add any functionality that will set that state.
- [x] Repeat this for all the functionality of a component before moving on to the next.
- [ ] Once all the functionality of a component is complete you can style the component at this point or leave all your styling until the end.
- [ ] Repeat this process until you have a complete app.

# to do

- [x] lyrics section
- [x] make sure track List doesn't duplicate
- [x] delete feature for track list
- [ ] styling
- [x] if possible a reveal button
