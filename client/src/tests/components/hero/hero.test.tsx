import { describe, expect } from "vitest"
import { renderWithRouter } from "../../utils/testHelpers"
import Hero from "../../../components/hero/hero"
import { screen } from "@testing-library/react"

describe("Hero", () => {
  it("should render hero component correctly", () => {
    // Arrange
    const text = "Buy Awesome Books"
    renderWithRouter(<Hero />)

    // Act
    const heading = screen.getByText(text)

    // Assert
    expect(heading).toBeInTheDocument()
  })
})
