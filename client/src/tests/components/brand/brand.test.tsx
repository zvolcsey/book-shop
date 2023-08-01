import { describe } from "vitest"
import { renderWithRouter } from "../../utils/testHelpers"
import Brand from "../../../components/brand/brand"
import { screen } from "@testing-library/react"

describe("Brand", () => {
  it("should render Brand component correctly", async () => {
    // Arrange
    renderWithRouter(<Brand />)

    // Act
    await screen.findByRole("link")

    // Assert
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByText("BookShop")).toBeInTheDocument()
  })
})
