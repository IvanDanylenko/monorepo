import { render } from '@testing-library/react';

import Next from './next';

describe('Next', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Next />);
    expect(baseElement).toBeTruthy();
  });
});
