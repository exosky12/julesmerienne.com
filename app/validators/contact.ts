import vine from '@vinejs/vine'

export const ContactValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).maxLength(100),
    email: vine.string().email().normalizeEmail(),
    message: vine.string().minLength(10).maxLength(1000),
  })
)
