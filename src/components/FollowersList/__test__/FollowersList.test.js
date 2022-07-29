import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RAN ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER TESTS");
  });

  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TEST");
  });

  it("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower item1", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower item2", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render multiple follower items", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item/);
  //     expect(followerDivElement.length).toBe(5);
  //   });
});
