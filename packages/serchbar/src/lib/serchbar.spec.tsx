import { render } from '@testing-library/react';

import Serchbar from './serchbar';

describe('Serchbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Serchbar />);
    expect(baseElement).toBeTruthy();
  });
});
