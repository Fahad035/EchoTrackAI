import { z } from "zod";

export const carbonSchema = z.object({
  carKm: z
    .number()
    .min(0, "Car travel cannot be negative")
    .max(50000, "Value too large"),

  electricityUnits: z
    .number()
    .min(0, "Electricity cannot be negative")
    .max(10000, "Value too large"),

  diet: z.enum(["veg", "mixed", "nonveg"])
});