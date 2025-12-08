import { render } from "@testing-library/react";
import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "@/components/ui/provider";
test("renders app", () => {
  render(
    <Provider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  //   expect(
  //     // screen.getByRole("heading", { name: /hii abhishek/i })
  //   ).toBeInTheDocument();
});
