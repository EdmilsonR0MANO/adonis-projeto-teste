import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/core/build/standalone'
import ProcessOfTransactionvalidator from 'App/Validators/ProcessOfTransactionsValidator';
import TransactionUseCase from 'App/UseCase/TransactionUseCase';


@inject()
export default class processOfTransactionsController {
    constructor(
        private readonly transactionUseCase: TransactionUseCase
    ) { }
    public async create({ request, response }: HttpContextContract) {
        const transactionDto = await request.validate(ProcessOfTransactionvalidator)
        const transaction =  await this.transactionUseCase.run(transactionDto)
        return response.ok({transaction})

    }
}   
