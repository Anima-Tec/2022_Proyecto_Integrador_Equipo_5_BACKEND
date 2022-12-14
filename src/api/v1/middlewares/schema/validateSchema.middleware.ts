import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateSchema =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parse({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json(
            error.issues.map((issue) => ({
              path: issue.path,
              message: issue.message,
            }))
          );
        }
        return res.status(400).json({ message: "internal server error" });
      }
    };
