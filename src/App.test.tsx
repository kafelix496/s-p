import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('shows a header', () => {
        render(<App />);
        const header = screen.getByRole('heading', { name: 'Resource Tracker' });
        expect(header).toBeInTheDocument();
    });
});
