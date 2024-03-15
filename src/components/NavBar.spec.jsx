import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders NavBarItems with correct titles", () => {
    const { getByText } = render(<NavBar />);

    expect(getByText("High Rated")).toBeInTheDocument();
    expect(getByText("Trending")).toBeInTheDocument();
  });

  test("renders NavBarItems with correct params", () => {
    const { getByTestId } = render(<NavBar />);
  });
});
