# react-testing

[![Build Status](https://travis-ci.org/jeremija/react-testing.svg?branch=master)][1]

Reduces boilerplate code when testing React components.

# Usage

Rendering using `react-addons-test-utils`:

```javascript
const { React, render } = require('react-testing');
const MyComponent = require('../MyComponent.jsx');
describe('MyComponent', () => {
  it('should render without problems', () => {
    const { component, node } = index.render(
      <MyComponent className="my-class">test</MyComponent>
    );
    expect(obj.component.props.className).toBe('my-class');
    expect(obj.node.textContent).toBe('test');
  });
});
```

Rendering using `react-test-renderer`:

```javascript
const { React, renderPure } = require('react-testing');
const MyComponent = require('../MyComponent.jsx');
describe('MyComponent', () => {
  it('should render without problems', () => {
    const obj = index.renderPure(
      <MyComponent className="my-class">test</MyComponent>
    );
    expect(obj.toJSON().children).toEqual(['test']);
  });
});
```

# License
[ISC][2]

[1]: https://travis-ci.org/jeremija/react-testing
[2]: https://opensource.org/licenses/ISC
