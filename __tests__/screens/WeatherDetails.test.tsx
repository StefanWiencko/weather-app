import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import WeatherDetails from "@/screens/WeatherDetails";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("@/store/favorite-locations-context", () => ({
  useFavoriteLocation: jest.fn(),
}));

const mockNavigation: any = {
  setOptions: jest.fn(),
};

const mockRoute: any = {
  params: {
    location: "Dummy Location",
  },
};

describe("Weather Details", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    require("@/store/favorite-locations-context").useFavoriteLocation.mockReturnValue(
      {
        favoriteLocations: [],
        addFavoriteLocation: jest.fn(),
        removeFavoriteLocation: jest.fn(),
      }
    );
  });

  it("renders loading indicator while fetching weather data", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const { getByTestId } = render(
      <WeatherDetails navigation={mockNavigation} route={mockRoute} />
    );
    const loadingIndicator = getByTestId("spinner");

    expect(loadingIndicator).toBeTruthy();
  });

  it("renders weather details after successful data fetching", async () => {
    const dummyData = {
      name: "Dummy City",
      main: {
        temp: 20,
        feels_like: 18,
        pressure: 1012,
        humidity: 70,
      },
    };
    (useQuery as jest.Mock).mockReturnValue({
      isSuccess: true,
      data: dummyData,
    });

    const { getByText } = render(
      <WeatherDetails navigation={mockNavigation} route={mockRoute} />
    );

    await waitFor(() => {
      expect(getByText(`Weather for ${dummyData.name}`)).toBeTruthy();
      expect(
        getByText(`Temperature: ${Math.round(dummyData.main.temp)}°C`)
      ).toBeTruthy();
      expect(
        getByText(
          `Perceived temperature: ${Math.round(dummyData.main.feels_like)}°C`
        )
      ).toBeTruthy();
      expect(getByText(`Pressure: ${dummyData.main.pressure}hPa`)).toBeTruthy();
      expect(getByText(`Humidity: ${dummyData.main.humidity}%`)).toBeTruthy();
    });
  });

  it("renders error message if data fetching fails", async () => {
    const errorMessage = "Failed to fetch weather data";
    (useQuery as jest.Mock).mockReturnValue({
      isError: true,
      error: { message: errorMessage },
    });

    const { getByText } = render(
      <WeatherDetails navigation={mockNavigation} route={mockRoute} />
    );
    const errorText = getByText(errorMessage);

    expect(errorText).toBeTruthy();
  });
});
