import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render the correct amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// it('should render "task" when the number of incomplete tasks is one1', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeTruthy();
// });

// it('should render "task" when the number of incomplete tasks is one2', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();
// });

// it('should render "task" when the number of incomplete tasks is one3', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML("p");
// });

// it('should render "task" when the number of incomplete tasks is one4', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it('should render "task" when the number of incomplete tasks is one5', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it('should render "task" when the number of incomplete tasks is one6', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement).not.toHaveTextContent("1 task lefts");
// });

// it('should render "task" when the number of incomplete tasks is one7', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement.textContent).toBe("1 task left");
// });

// it('should render "task" when the number of incomplete tasks is one8', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement.textContent).toBe("1 task left");
//   expect(paragraphElement.textContent).toBe("1 task left");
//   expect(paragraphElement.textContent).toBe("1 task left");
//   //   expect(paragraphElement.textContent).toBe("5 task left");
//   expect(paragraphElement.textContent).toBe("1 task left");
//   expect(paragraphElement.textContent).toBe("1 task left");
// });

describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

describe("TodoFooter 1", () => {
  describe("Function 1", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("Function 2", () => {
    it('should render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
