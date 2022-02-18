import { render } from "@testing-library/react";
import RequestAPI from "./RequestAPI";

describe("async query test", () => {
  beforeEach(() => {
    render(<RequestAPI />);
  });

  it("should test API query", async () => {
    // test with mock
    const mock = jest.fn();
    const data = {
        name : "BuggyPee",
        type: "vpn quadcopter",
        price: 199,
        categlry: "micro drone"
    }
    mock.mockReturnValue(data);
    const result = await mock();
    expect(result.name).toBe("BuggyPee")

  });
});
