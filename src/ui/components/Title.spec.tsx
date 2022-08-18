import Title from "@/ui/components/Title";
import { render, screen } from "@testing-library/react";

describe(`Title`, () =>
{
	it(`renders a Title component`, () =>
	{
		render(<Title>Test Title</Title>);

		expect(screen.getByText(`Test Title`)).toBeInTheDocument();
	});
});
