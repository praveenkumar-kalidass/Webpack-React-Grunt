import React from 'react';
import App from './App.react';
import renderer from 'react-test-renderer';

test("App Container", () => {
  const component = renderer.create(
    <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
