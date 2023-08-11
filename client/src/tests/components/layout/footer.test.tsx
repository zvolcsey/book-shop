import { describe, expect } from "vitest"
import { renderWithRouter } from "../../utils/testHelpers"
import Footer from "../../../components/layout/footer"
import { screen } from "@testing-library/react"

describe("Footer", () => {
  it("should render footer correctly", () => {
    // Arrange
    renderWithRouter(<Footer />)

    // Act
    const footer = screen.getByTestId("footer")

    // Assert
    expect(footer).toBeInTheDocument()
  })
})
