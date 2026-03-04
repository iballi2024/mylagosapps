import { createTheme } from "@mantine/core";

export const primaryButtonTheme = createTheme({
    components: {
        Button: {
            styles:{
                root: {
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    borderRadius: '100vmax',
                    // padding: "0.5rem 1.5rem",
                    // height: "2.5rem",
                    fontSize: "inherit",
                    zIndex: 0,
                    // color: "inherit",
                },
            }
        },
    },
});
