import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import createUserValidator from 'App/Validators/createUserValidator'

export default class UsersController {
    public async({ request }: HttpContextContract) {
        const userDto = request.validate(createUserValidator)
    }
}
