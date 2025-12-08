import { render } from "@testing-library/react";
import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

//   expect(
//     // screen.getByRole("heading", { name: /hii abhishek/i })
//   ).toBeInTheDocument();
});
