const index = require('../index.js');

describe('index', () => {

  it('exports react, react-dom and test-utils', () => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    const TestUtils = require('react-addons-test-utils');
    const TestRenderer = require('react-test-renderer');
    expect(index.React).toBe(React);
    expect(index.ReactDOM).toBe(ReactDOM);
    expect(index.TestUtils).toBe(TestUtils);
    expect(index.TestRenderer).toBe(TestRenderer);
  });

  describe('rendering', () => {
    let Component;
    beforeEach(() => {
      const React = index.React;
      Component = React.createClass({
        render() {
          return (
            <div className={this.props.className}>
              {this.props.children}
            </div>
          );
        }
      });
    });

    describe('render', () => {

      it('renders a component def and exports the component and node', () => {
        const React = index.React;
        const obj = index.render(
          <Component className="my-class">test</Component>
        );
        expect(obj.component.props.className).toBe('my-class');
        expect(obj.node.textContent).toBe('test');
      });

    });

    describe('renderPure', () => {

      it('renders a component using test renderer', () => {
        const React = index.React;
        const obj = index.renderPure(
          <Component className="my-class">test</Component>
        );
        expect(obj.toJSON()).toEqual({
          children: ['test'],
          props: {
            className: 'my-class'
          },
          type: 'div'
        });
      });

    });

  });

});
