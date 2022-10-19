import { render, screen } from '@testing-library/react';
import React from 'react';
import { CardItem } from '../components/CardItem';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

test('should render CardItem component', () => {
	render(<MemoryRouter><CardItem name='test-name' words='test-words' url='test-url' /></MemoryRouter>);
	expect(screen.getByText(/test-name/)).toBeInTheDocument();
	expect(screen.getByText(/test-words/)).toBeInTheDocument();
	expect(screen.getByRole('link')).toHaveAttribute('href', '/house/test-url');
});