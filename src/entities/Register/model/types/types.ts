import { z } from "zod";

export const emailPasswordSchema = z.object(
    {
        email: z.string().email({ message: 'Не верный адрес электронной почты' }),
        password: z.string().min(1, { message: 'Слишком короткий пароль' }),
    }
)

export type TLoginInfo = z.infer<typeof emailPasswordSchema>;