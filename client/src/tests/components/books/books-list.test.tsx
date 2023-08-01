import { cleanup, screen } from "@testing-library/react"
import { describe } from "vitest"
import { renderWithRouter } from "../../utils/testHelpers"
import BooksList from "../../../components/books/books-list"
import { testBookList } from "../../utils/testData"

describe("BooksList", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render the books list correctly", async () => {
    // Arrange
    renderWithRouter(<BooksList books={testBookList} />)

    // Act
    await screen.findByRole("list")

    // Assert
    expect(screen.getByRole("list")).toBeInTheDocument()
    expect(screen.getByText(testBookList[0].title)).toBeInTheDocument()
    expect(screen.getByText(testBookList[1].title)).toBeInTheDocument()
  })
})
