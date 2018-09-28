import React from 'react';
import Friends from './Friends.react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

test("Friends Component", () => {
  store = mockStore();
  const component = renderer.create(
    <Friends store={store} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
