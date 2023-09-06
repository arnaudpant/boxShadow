import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../src/components/Footer";

test('Render du Footer', () => {
    render(<Footer />)
})

test('Affichage texte dans footer', () => {
    render(<Footer />)
    const texteFooter = screen.getByText(/© 2023/i)
    expect(texteFooter).toBeInTheDocument()
})