"use client";

import { IUserShape } from "interfaces";
import { createContext } from "react";

interface IContextShape {
    showLeftOption: boolean;
    setShowLeftOption: (value: boolean) => void;
    user: Omit<IUserShape, "password">;
    setUser: (user: Omit<IUserShape, "password">) => void;
}

const initialContextValue: IContextShape = {
    showLeftOption: false,
    setShowLeftOption: (value: boolean) => { },
    user: {
        name: "",
        email: "",
        id: 0,
    },
    setUser: (user: Omit<IUserShape, "password">) => { },
};

export const MyContext = createContext<IContextShape>(initialContextValue);
