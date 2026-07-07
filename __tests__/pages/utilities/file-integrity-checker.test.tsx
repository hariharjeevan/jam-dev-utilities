import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileIntegrityChecker from "../../../pages/utilities/file-integrity-checker";

describe("FileIntegrityChecker", () => {
  test("computes the sha256 hash automatically as soon as a file is uploaded", async () => {
    render(<FileIntegrityChecker />);

    const user = userEvent.setup();
    const file = new File(["hello world"], "hello.txt", {
      type: "text/plain",
    });

    await user.upload(screen.getByTestId("input"), file);

    expect(await screen.findByText(/sha-256 hash/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/^[a-f0-9]{64}$/i)).toBeInTheDocument();
  });

  test("switching algorithms clears the stale hash and recomputes for the new one", async () => {
    render(<FileIntegrityChecker />);

    const user = userEvent.setup();
    const file = new File(["hello world"], "hello.txt", {
      type: "text/plain",
    });

    await user.upload(screen.getByTestId("input"), file);
    await screen.findByDisplayValue(/^[a-f0-9]{64}$/i); // sha256 by default

    await user.selectOptions(screen.getByLabelText(/hash algorithm/i), "md5");

    expect(await screen.findByText(/md5 hash/i)).toBeInTheDocument();
    expect(
      await screen.findByDisplayValue(/^[a-f0-9]{32}$/i)
    ).toBeInTheDocument();
  });
});
