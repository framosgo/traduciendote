import * as React from 'react';
import { shallow } from 'enzyme';

import Portal from '.';

beforeEach(() => {
  // @ts-ignore
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');

  // @ts-ignore
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);
});

afterEach(() => {
  // @ts-ignore
  const modalRoot = global.document.getElementById('modal-root');
  if (modalRoot) {
    modalRoot.remove();
  }
});

describe('Portal', () => {
  it('should return a valid portal', () => {
    const component = shallow(<Portal>Content</Portal>);

    expect(component).toMatchSnapshot();
  });

  it('should return a valid portal with two childs', () => {
    const component = shallow(
      <div>
        <Portal>Content</Portal>
        <Portal>Content 2</Portal>
      </div>
    );

    expect(component).toMatchSnapshot();
  });
});
