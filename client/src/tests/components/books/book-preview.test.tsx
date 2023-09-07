import { describe, expect } from "vitest"
import { cleanup, screen } from "@testing-library/react"
import BookPreview from "../../../components/books/book-preview"
import { renderWithRouter } from "../../utils/testHelpers"
import { john, testBook1 } from "../../utils/testData"

describe("BookPreview", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render the book preview card without cover image correctly", async () => {
    // Arrange
    renderWithRouter(<BookPreview book={testBook1} />)

    // Act
    await screen.findByRole("article")

    // Assert
    expect(screen.getByRole("article")).toMatchSnapshot()
  })

  it("should display the book's title, author, prices correctly", () => {
    // Arrange
    renderWithRouter(<BookPreview book={testBook1} />)

    // Act
    const fullName = `${john.firstName} ${john.lastName}`
    const priceText = screen.getByText(`${testBook1.price.toString()} USD`)

    // Assert
    expect(screen.getByText(testBook1.title)).toBeInTheDocument()
    expect(screen.getByText(fullName)).toBeInTheDocument()
    expect(parseFloat(priceText.textContent!)).toEqual(testBook1.price)
  })

  it("should display 'No image available' messsage, if there is NO cover", async () => {
    // Arrange
    const noCoverText = "No image available"
    renderWithRouter(<BookPreview book={testBook1} />)

    // Act
    await screen.findByRole("figure")

    // Assert
    expect(screen.getByRole("figure")).toBeInTheDocument()
    expect(screen.getByText(noCoverText)).toBeInTheDocument()
  })
})
