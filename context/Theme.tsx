"use client";

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...propps }: ThemeProviderProps) => {
    return <NextThemesProvider {...propps}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
