import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passes into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My /i);
  expect(headingElement).toBeInTheDocument();
});

/*

Video -7 

it("should render same text passes into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My /i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passes into title prop1', async() => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole('heading');
// //   const headingElement = screen.getByRole('paragraph'); // In show an error because actual role of title is heading
//   expect(headingElement).toBeInTheDocument();
// });

it("should render same text passes into title prop2", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passes into title prop3", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passes into title prop4", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// Find By

it("should render same text passes into title prop5", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// Query By

it("should render same text passes into title prop6", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

it("should render same text passes into title prop7", async () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

*/

// test('should render same text passes into title prop', async() => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByText(/My /i);
//   expect(headingElement).toBeInTheDocument();
// });
