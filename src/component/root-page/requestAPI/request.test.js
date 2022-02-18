import { render } from "@testing-library/react";
import RequestAPI from "./RequestAPI";

describe("async query test", () => {
  beforeEach(() => {
    render(<RequestAPI />);
  });

  it("should test API query", async () => {
    // test with mock
    const mock = jest.fn();
    mock.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          title: "drone 1",
          price: "100",
          image: "image/drone1.png",
        },
      ],
    });
  });
});
