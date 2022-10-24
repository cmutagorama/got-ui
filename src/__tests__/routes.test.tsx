import * as React from "react";
import { create } from "react-test-renderer";
import {
	MemoryRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "../pages/home";
import House from "../pages/house";
import { NoMatch } from "../pages/nomatch";
import Books from "../pages/books";
import Characters from "../pages/characters";

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

  it("should render home page", () => {
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
	
	it("should render house details page", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/house/1"]}>
        <Routes>
          <Route path="/house/:id" element={<House />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
	});

	it("should render characters page", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/characters"]}>
        <Routes>
          <Route path="/characters" element={<Characters />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
	});
	
	it("should render books page", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/books"]}>
        <Routes>
          <Route path="/books" element={<Books />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
	});
	
	it("should render 404 page", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/wrong-page"]}>
        <Routes>
          <Route path="*" element={<NoMatch />}>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});