import Input from "@/components/UI/Input";
import { render, fireEvent } from "@testing-library/react-native";

describe("Input", () => {
  it("displays text correctly", () => {
    const { getByDisplayValue } = render(
      <Input
        label="Test"
        textInputConfig={{
          value: "Test",
          inputMode: "text",
          onChangeText: () => {},
        }}
      />
    );

    const input = getByDisplayValue("Test");
    expect(input).toBeTruthy();
  });

  it("fires onChangeText fn", () => {
    const mockOnChangeText = jest.fn();
    const { getByDisplayValue } = render(
      <Input
        label="Test"
        textInputConfig={{
          value: "Test",
          inputMode: "text",
          onChangeText: mockOnChangeText,
        }}
      />
    );

    const input = getByDisplayValue("Test");
    fireEvent.changeText(input);

    expect(mockOnChangeText).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const tree = render(
      <Input
        label="Test"
        textInputConfig={{
          value: "Test",
          inputMode: "text",
          onChangeText: () => {},
        }}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
