import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "../test/test-utils";
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

test("Ajout d'un Shadow", async () => {
    const ShadowMock1 = () => {
        return (<li>Shadow 1</li>)
    };
    Shadow.mockImplementation(ShadowMock1);

    render(<ShadowList />);
    const btnAddShadow = screen.getByRole('button', {name: /Add Shadow/i})
    expect(btnAddShadow).toBeInTheDocument()

    await fireEvent.click(btnAddShadow)

})