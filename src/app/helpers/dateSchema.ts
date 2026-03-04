import { z } from "zod";
import { isValidDateString } from "./isValidDate";



const dateSchema = z.string().refine((val) => isValidDateString(val), {
    message: "Invalid date",
});

dateSchema.parse("2026-02-04");
