import { test } from '@japa/runner'
import { ContactValidator } from '#validators/contact'

test.group('Contact validator', () => {
  test('validates valid contact data', async ({ assert }) => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to contact you regarding a project.',
    }

    const payload = await ContactValidator.validate(data)
    assert.deepEqual(payload, data)
  })

  test('fails when email is invalid', async ({ assert }) => {
    const data = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'Hello, I would like to contact you regarding a project.',
    }

    try {
      await ContactValidator.validate(data)
      assert.fail('Should have failed')
    } catch (error: any) {
      assert.exists(error.messages)
      assert.include(
        JSON.stringify(error.messages),
        'The email field must be a valid email address'
      )
    }
  })

  test('fails when message is too short', async ({ assert }) => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    }

    try {
      await ContactValidator.validate(data)
      assert.fail('Should have failed')
    } catch (error: any) {
      assert.exists(error.messages)
      // The exact error message depends on VineJS default messages
    }
  })
})
