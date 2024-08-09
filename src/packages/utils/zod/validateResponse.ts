import { z, ZodError, ZodObject, ZodRawShape } from "zod";

export class ValidationError extends Error {
  constructor(public errors: ZodError["errors"]) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}

export const validateResponse = <T extends ZodRawShape>(
  schema: ZodObject<T>,
) => {
  return (data: unknown): z.infer<typeof schema> => {
    try {
      console.log({ dataToValidate: data });
      return schema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("error zod", error);
        throw new ValidationError(error.errors);
      }
      throw error;
    }
  };
};
