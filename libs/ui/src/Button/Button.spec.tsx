import { render, screen } from '@testing-library/react';
import { Button } from './index';
describe('Button', () => {
  it('renders as expected', () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });
});
