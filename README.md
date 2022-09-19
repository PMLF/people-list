# Persons List

#### By Pedro Fonseca

---

## Set up

```
npm i
```

## Build optimized version for production

```
npm run build
```

## Run project

```
npm start
```

## Test

⚠️ Make sure you're using Node v16!

```
npm run test
```

---

## Stack & Main Packages

- TypeScript
- React Hooks
- Jest
- Styled Components
- Font Awesome
- Sweet Alert 2
- Antd

## Next possible steps and improvements

- Improve test coverage - The tests done were just examples, we would need unit tests for every component and also different tests like integration or even end-to-end.
- AddPersonForm tests don't work - I commented the two whole tests and added a dummy test that will pass just so that there is no error in the files. These tests were not fully working, but I think it's worth it including them in, for task evaluation purposes and to show some test logic knowledge.
- We could use Redux or other state management tool - I opted not to as this app was very simple, but if we were to make this a bigger product, then that would be a better approach from the start.
- The styles are not all consistent - I used Antd components and, especially on the buttons, the styles are slightly different throughout the app for similar components. This would be avoided by creating our own component library and using it for common components. Examples of this are the List component (generic on purpose) and eventually a Button component that could be created too.
