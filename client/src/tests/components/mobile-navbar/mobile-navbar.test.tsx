import { describe, expect } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithRouter } from "../../utils/testHelpers"
import MobileNavbar from "../../../components/mobile-navbar/mobile-navbar"

describe("MobileNavbar", () => {
  it("should render the component correctly", () => {
    // Arrange
    renderWithRouter(<MobileNavbar />)

    // Act
    const mobileNavbar = screen.getByTestId("mobile-navbar")

    // Assert
    expect(mobileNavbar).toBeInTheDocument()
  })
})
