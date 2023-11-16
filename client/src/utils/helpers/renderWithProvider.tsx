import { ReactNode } from "react";

import { Provider } from "react-redux";

import { store } from "@/store/store";
import { render } from "@testing-library/react";

const renderWithAllProviders = (component: ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

export { renderWithAllProviders };
