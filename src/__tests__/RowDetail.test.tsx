/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import { RowDetail } from "../components/RowDetail"

describe("Row detail component", () => {
	it('should render RowDetail component with a gray background', () => {
		const { container } = render(<RowDetail title="test-title" text="test-text" isGray={true} />);
		expect(screen.getByText(/test-title/)).toBeInTheDocument();
		expect(screen.getByText(/test-text/)).toBeInTheDocument();
		expect((container.firstChild as HTMLDivElement).className).toContain('bg-gray-50');
	});
	
	it('should render RowDetail component with a white background', () => {
		const { container } = render(<RowDetail title="test-title" text="test-text" isGray={false} />);
		expect(screen.getByText(/test-title/)).toBeInTheDocument();
		expect(screen.getByText(/test-text/)).toBeInTheDocument();
		expect((container.firstChild as HTMLDivElement).className).toContain('bg-white');
	});
})