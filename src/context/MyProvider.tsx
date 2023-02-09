import { useState } from "react";

import { MyContext } from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export function MyProvider({ children }: MyProviderPropsShape) {
  const [showLeftOption, setShowLeftOption] = useState(true);

  const data = {
    showLeftOption,
    setShowLeftOption,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
