import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/core/build/standalone'
import ProcessOfTransactionvalidator from 'App/Validators/ProcessOfTransactionsValidator';
import TransactionUseCase from 'App/UseCase/TransactionUseCase';
import TransactionRepository from 'App/Repositories/User/TransactionRepository';


@inject()
export default class processOfTransactionsController {
    constructor(
        private readonly transactionUseCase: TransactionUseCase,
        private readonly transactionRepository: TransactionRepository
    ) { }
    public async create({ request, response }: HttpContextContract) {
        const Transaction = await request.validate(ProcessOfTransactionvalidator)
        await this.transactionUseCase.run(Transaction)
        return response.noContent()
    }
    public async show ({request, response}: HttpContextContract) {
        const ListOfTransaction = request.qs()
        const show = await this.transactionRepository.show(ListOfTransaction)
        return response.ok(show)

    }
}   
