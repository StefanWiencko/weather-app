import ListItem from "@/components/UI/ListItem";
import { render, fireEvent } from "@testing-library/react-native";

describe("List item", () => {
  it("displays text correctly", () => {
    const { getByText } = render(<ListItem text="Test" onPress={() => {}} />);
    expect(getByText("Test")).toBeTruthy();
  });

  it("fires onPress fn", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ListItem text="Test" onPress={mockOnPress} />
    );

    const listItem = getByText("Test");
    fireEvent.press(listItem);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const tree = render(<ListItem text="Test" onPress={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
