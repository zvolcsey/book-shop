import { describe, expect } from "vitest"
import { renderWithRouter } from "../../utils/testHelpers"
import Header from "../../../components/layout/header"
import { screen } from "@testing-library/react"

describe("Header", () => {
  it("should render header correctly", () => {
    // Arrange
    renderWithRouter(<Header />)

    // Act
    const header = screen.getByTestId("header")

    // Assert
    expect(header).toBeInTheDocument()
  })
})
