import { z } from 'zod'

export interface FormRequestDtoInterface extends z.infer<typeof FormRequestDto> { }
export const FormRequestDto = z.object({
    title: z.string().min(1, 'Required'),
    description: z.string().optional(),
    statusId: z.string().min(1, 'Country is required'),
    urgencyId: z.string().min(1, 'Province is required'),

})