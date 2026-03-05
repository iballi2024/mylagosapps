import { createTheme, Textarea } from "@mantine/core";
import { input } from "framer-motion/client";

const labelStyles = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "inherit",
    zIndex: 0,
    color: "inherit",
    textAlign: "left",
    marginBottom: "0.5rem",
};

export const inputControlTheme = createTheme({
    components: {
        TextInput: {
            styles:{
                root: {
                },
                label: labelStyles,
                input: {
                    borderRadius: 5,
                    height: 45,
                    fontSize: "inherit",
                },
            }
        },
        Textarea: {
            styles:{
                label: labelStyles,
                input: {
                    borderRadius: 5,
                    fontSize: "inherit",
                },
            }
        },
    },
});
