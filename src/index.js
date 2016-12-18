const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const TestRenderer = require('react-test-renderer');

function renderPure() {
  return TestRenderer.create.apply(TestRenderer, arguments);
}

function render(c) {
  const component = TestUtils.renderIntoDocument(c);
  const node = ReactDOM.findDOMNode(component);
  return { node, component };
}

module.exports = {
  React,
  ReactDOM,
  TestUtils,
  TestRenderer,
  renderPure,
  render
};
