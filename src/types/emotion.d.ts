import "@emotion/react";
import { Theme as CustomTheme } from "@styles/theme";

declare module "@emotion/react" {
    type Theme = CustomTheme;
}