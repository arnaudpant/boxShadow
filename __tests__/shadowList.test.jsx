import { expect, test, vi } from "vitest";
import { render, screen } from "../test/test-utils";
import "@testing-library/jest-dom";

import ShadowList from "../src/layouts/shadowList/ShadowList";
import Shadow from "../src/layouts/shadowList/Shadow";

vi.mock("../src/layouts/shadowList/Shadow");

test("Affichage de component ShadowList avec le store", () => {
    render(<ShadowList />);
    expect(
        screen.getByRole("button", { name: /Add Shadow/i })
    ).toBeInTheDocument();
});

test("Affichage du premier component Shadow", () => {
    const ShadowMock = () => {
        return <li>Shadow 1</li>;
    };
    Shadow.mockImplementation(ShadowMock);

    render(<ShadowList />);
    expect(screen.getByText(/Shadow 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Shadow 2/i)).not.toBeInTheDocument();
});

