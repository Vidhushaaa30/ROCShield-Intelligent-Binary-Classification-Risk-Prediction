import { z } from 'zod';

/**
 * Validation schema for Create authentication request validation schemas with Zod
 * Project: ROCShield — Intelligent Binary Classification & Risk Prediction
 */
export const auth.validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title must contain at least 2 characters').max(200),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED']).default('ACTIVE'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  metadata: z.record(z.any()).optional(),
  createdAt: z.date().optional(),
});

export type auth.validatorInput = z.infer<typeof auth.validatorSchema>;

export const validateauth.validator = (payload: unknown) => {
  return auth.validatorSchema.safeParse(payload);
};
