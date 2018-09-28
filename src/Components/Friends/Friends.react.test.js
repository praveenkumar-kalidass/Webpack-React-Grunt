import React from "react";
import Friends from "./Friends.react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import {Provider} from "react-redux";

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

describe("Friends Component", () => {
  beforeEach(() => {
    store = mockStore({
      friends: {
        friends: []
      }
    });
  });

  it("Snapshot", () => {
    const component = renderer.create(
      <Friends store={store} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Component Did Mount", () => {
    sinon.spy(Friends.prototype, "componentDidMount");
    const wrapper = mount(<Friends store={store} />);
    expect(Friends.prototype.componentDidMount.callCount).toBe(1);
  });

  it('Component Will Receive props', () => {
    const wrapper = shallow(
      <Friends store={store} />
    ).dive();
    expect(wrapper.state().friends.length).toBe(0);
    wrapper.setProps({ friends: ["a", "b", "c"] });
    expect(wrapper.state().friends.length).toBe(3);
  });
});
