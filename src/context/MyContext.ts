import { createContext } from "react";

interface IContextShape {
    showLeftOption: boolean;
    setShowLeftOption: (value: boolean) => void;
}

const initialContextValue = {
    showLeftOption: false,
    setShowLeftOption: (value: boolean) => { },
};

export const MyContext = createContext<IContextShape>(initialContextValue);
