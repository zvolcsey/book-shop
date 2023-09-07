import React, { PropsWithChildren } from "react"
import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import type { ExtendedRenderOptions } from "../../app/types/redux.types"
import { setupStore } from "../../app/store"

// Source: https://testing-library.com/docs/example-react-router/
export const renderWithRouter = (
  ui: React.ReactElement,
  { route = "/" } = {},
) => {
  window.history.pushState({}, "Test page", route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  }
}

// Source: https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
