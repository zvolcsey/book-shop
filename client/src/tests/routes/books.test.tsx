import { cleanup, screen } from "@testing-library/react"
import { describe, expect } from "vitest"
import { renderWithRouter } from "../utils/testHelpers"
import Books from "../../routes/books"

describe("Books page", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render the page with the provided data correctly", async () => {
    // Assert
    renderWithRouter(<Books />)

    // Act
    await screen.findByRole("list")

    // Assert
    expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
