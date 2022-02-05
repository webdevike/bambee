import { render } from '@testing-library/react';
import Logo from './Logo';

test('Loads Logo', async () => {
    render(<Logo />);
});