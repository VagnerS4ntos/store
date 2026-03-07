import { z } from "zod";
import { User } from "firebase/auth";

/********************* CURRENT USER *************************/
export type userT = {
  user: User;
  getUser: (data: User) => void;
};

/********************* HANDLE DATE *************************/
const dateSchema = z.object({
  year: z.number(),
  setYear: z.function({
    input: [z.number()],
    output: z.void(),
  }),
  month: z.number(),
  setMonth: z.function({
    input: [z.number()],
    output: z.void(),
  }),
});

export type selectDateT = z.infer<typeof dateSchema>;

/********************* PRODUCTS DATA *************************/
const productsDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
});

export type productsDataT = z.infer<typeof productsDataSchema>;

const productsSchema = z.object({
  creating: z.boolean(),
  setCreating: z.function({
    input: [z.boolean()],
    output: z.void(),
  }),

  deleting: z.boolean(),
  setDeleting: z.function({
    input: [z.boolean()],
    output: z.void(),
  }),

  editing: z.boolean(),
  setEditing: z.function({
    input: [z.boolean()],
    output: z.void(),
  }),

  allProducts: z.array(productsDataSchema),
  getAllProducts: z.function({
    input: [z.array(productsDataSchema)],
    output: z.void(),
  }),

  productsByDate: z.array(productsDataSchema),
  getProductsByDate: z.function({
    input: [z.array(productsDataSchema)],
    output: z.void(),
  }),
});

export type productsStateT = z.infer<typeof productsSchema>;
