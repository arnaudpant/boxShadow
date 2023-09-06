import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LeftContainer from "../src/layouts/LeftContainer";
import ShadowList from "../src/layouts/shadowList/ShadowList";
import BoxPanel from "../src/layouts/boxPanel/BoxPanel";
vi.mock("../src/layouts/shadowList/ShadowList");
vi.mock("../src/layouts/boxPanel/BoxPanel");

test("Affichage initial du composant sans onglet selectionne", () => {
    render(<LeftContainer />);
    const shadowTabButton = screen.getByRole("button", { name: "Shadow" });
    const boxTabButton = screen.getByRole("button", { name: "Box" });

    expect(shadowTabButton).toBeInTheDocument();
    expect(boxTabButton).toBeInTheDocument();

    expect(shadowTabButton).toHaveClass("bg-gray-50");
    expect(boxTabButton).toHaveClass("bg-gray-50");
});

test("Affichage de l'onglet Shadow avec focus", async () => {
    const shadowListMock = () => {
        return <p>Customize Shadows</p>;
    };
    ShadowList.mockImplementation(shadowListMock);

    const boxPanelMock = () => {
        return <p>Box properties</p>;
    };
    BoxPanel.mockImplementation(boxPanelMock);

    render(<LeftContainer />);
    const shadowTabButton = screen.getByRole("button", { name: "Shadow" });
    const boxTabButton = screen.getByRole("button", { name: "Box" });

    fireEvent.click(shadowTabButton);

    shadowTabButton.focus();
    expect(shadowTabButton).toHaveFocus();
    expect(boxTabButton).not.toHaveFocus();

    const shadowComponent = screen.queryByText("Customize Shadows");
    const boxComponent = screen.queryByText("Box properties");

    expect(shadowComponent).toBeInTheDocument();
    expect(boxComponent).not.toBeInTheDocument();
});

test("Affichage de l'onglet Box avec focus", async () => {
    const boxPanelMock = () => {
        return <p>Box properties</p>;
    };
    BoxPanel.mockImplementation(boxPanelMock);

    render(<LeftContainer />);
    const boxTabButton = screen.getByRole("button", { name: "Box" });
    const shadowTabButton = screen.getByRole("button", { name: "Shadow" });

    fireEvent.click(boxTabButton);
    boxTabButton.focus();
    expect(boxTabButton).toHaveFocus();
    expect(shadowTabButton).not.toHaveFocus();

    const shadowComponent = screen.queryByText(/Customize Shadows/i);
    const boxComponent = screen.queryByText("Box properties");

    expect(shadowComponent).not.toBeInTheDocument();
    expect(boxComponent).toBeInTheDocument();
});
