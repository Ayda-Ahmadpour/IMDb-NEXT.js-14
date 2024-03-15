import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItems from "./MenuItems";
jest.mock("next/link", () => ({ children, href }) => (
  <a href={href}>{children}</a>
));

const MockIcon = () => <svg data-testid="mock-icon"></svg>;

describe("MenuItems component", () => {
  const testTitle = "Test Title";
  const testAddress = "/test-address";

  it("renders the correct title and address", () => {
    render(
      <MenuItems title={testTitle} address={testAddress} Icon={MockIcon} />
    );

    const linkElement = screen.getByRole("link", { name: testTitle });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", testAddress);

    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("mock-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
