import * as React from "react";
import { create } from "react-test-renderer";
import {
	MemoryRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "../pages/home";
import House from "../pages/house";

describe("Routes", () => {
	let consoleWarn: jest.SpyInstance;
  let consoleError: jest.SpyInstance;
  beforeEach(() => {
    consoleWarn = jest.spyOn(console, "warn").mockImplementation(() => {});
    consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarn.mockRestore();
    consoleError.mockRestore();
	});

  xit("renders home", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
	});
	
	xit("renders house details", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/house/1"]}>
        <Routes>
          <Route path="/" element={<House />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});