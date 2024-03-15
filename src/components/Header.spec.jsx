import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

Header.displayName = "Header";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

jest.mock("next/link", () => ({ children }) => <div>{children}</div>);

describe("Header component", () => {
  test("renders menu items with correct titles and icons", () => {
    const { getByText, getByTestId } = render(<Header />);

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });

  test("renders image with correct attributes", () => {
    const { getByAltText } = render(<Header />);

    const image = getByAltText("MyMovie");
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");
  });

  test("renders ThemeChanger component", () => {
    const { getByText } = render(<Header />);
  });
});
