import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBarItem from "./NavBarItem";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("NavBarItem component", () => {
  it("renders with correct title and params", () => {
    render(<NavBarItem title="High Rated" params="HighRatedFetching" />);

    const linkElement = screen.getByRole("link", { name: /High Rated/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/?genre=HighRatedFetching");
    expect(linkElement).toHaveClass("text-yellow-50");

    userEvent.click(linkElement);
  });
});
