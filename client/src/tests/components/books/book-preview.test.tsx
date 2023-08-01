import { describe, expect } from "vitest"
import { cleanup, screen } from "@testing-library/react"
import BookPreview from "../../../components/books/book-preview"
import type { IAuthor } from "../../../app/types/books.types"
import { renderWithRouter } from "../../utils/testHelpers"
import { testAuthor, testBookWithoutCover } from "../../utils/testData"

describe("BookPreview", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render the book preview card correctly", async () => {
    // Arrange
    renderWithRouter(<BookPreview book={testBookWithoutCover} />)

    // Act
    await screen.findByRole("article")

    // Assert
    expect(screen.getByRole("article")).toBeInTheDocument()
  })

  it("should display the book's title, author, prices correctly", () => {
    // Arrange
    renderWithRouter(<BookPreview book={testBookWithoutCover} />)

    // Act
    const onlinePriceText = screen.getByText(
      `${testBookWithoutCover.onlinePrice.toString()} USD`,
    )
    const originalPriceText = screen.getByText(
      `${testBookWithoutCover.originalPrice.toString()} USD`,
    )

    // Assert
    expect(screen.getByText(testBookWithoutCover.title)).toBeInTheDocument()
    expect(screen.getByText(testAuthor.name)).toBeInTheDocument()
    expect(parseFloat(onlinePriceText.textContent!)).toEqual(
      testBookWithoutCover.onlinePrice,
    )
    expect(parseFloat(originalPriceText.textContent!)).toEqual(
      testBookWithoutCover.originalPrice,
    )
  })

  it("should display the longest book's title and author correctly", () => {
    // Arrange
    const testAuthorWithLongName: IAuthor = {
      ...testAuthor,
      slug: "verylongfirstname-verylonglastname",
      name: "Verylongfirstname VeryLongLastname",
    }
    const testBookWithLongStrings = {
      ...testBookWithoutCover,
      title: "It is a very long title. It is a very long title",
      author: testAuthorWithLongName,
    }
    renderWithRouter(<BookPreview book={testBookWithLongStrings} />)

    // Assert
    expect(
      screen.getByText(
        `${testBookWithLongStrings.title.substring(0, 25)}${"..."}`,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${testAuthorWithLongName.name.substring(0, 25)}${"..."}`,
      ),
    ).toBeInTheDocument()
  })

  it("should display 'No image available' messsage, if there is NO cover", async () => {
    // Arrange
    const noCoverText = "No image available"
    renderWithRouter(<BookPreview book={testBookWithoutCover} />)

    // Act
    await screen.findByRole("figure")

    // Assert
    expect(screen.getByRole("figure")).toBeInTheDocument()
    expect(screen.getByText(noCoverText)).toBeInTheDocument()
  })
})
