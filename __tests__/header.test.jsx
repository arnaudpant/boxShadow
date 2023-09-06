import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";

test('Affichage du Header', ()=> {
    render(<Header />)
})

test('Affichage du titre', ()=>{
    render(<Header />)
    const title = screen.getByRole('heading', {level: 1})
    expect(title).toBeInTheDocument()
})