const { React, render, renderPure } = require('../index.js');

describe('index', () => {

  it('exports react, react-dom and test-utils', () => {
    expect(React).toBe(require('react'));
    const index = require('../index.js');
    expect(index.ReactDOM).toBe(require('react-dom'));
    expect(index.TestUtils).toBe(require('react-addons-test-utils'));
    expect(index.TestRenderer).toBe(require('react-test-renderer'));
  });

  describe('rendering', () => {
    let Component;
    beforeEach(() => {
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
        const { component, node } = render(
          <Component className="my-class">test</Component>
        );
        expect(component.props.className).toBe('my-class');
        expect(node.textContent).toBe('test');
      });

    });

    describe('renderPure', () => {

      it('renders a component using test renderer', () => {
        const obj = renderPure(
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
