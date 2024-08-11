import { z, ZodError, ZodObject, ZodRawShape } from 'zod';

export class ValidationError extends Error {
  constructor(public errors: ZodError['errors']) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

export const validateResponse = <T extends ZodRawShape>(schema: ZodObject<T>) => {
  return (data: unknown): z.infer<typeof schema> => {
    const validated = schema.safeParse(data);
    if (!validated.success) {
      throw new ValidationError(validated.error.errors);
    }
    return validated.data;
    // console.log('validated:::', validated);
    // try {
    //   // console.log({ dataToValidate: data });
    //   return schema.parse(data);
    // } catch (error) {
    //   if (error instanceof ZodError) {
    //     throw new ValidationError(error.errors);
    //   }
    //   throw error;
    // }
  };
};
