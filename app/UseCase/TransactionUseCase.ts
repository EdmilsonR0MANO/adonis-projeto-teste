import { inject } from "@adonisjs/fold";
import TransactionDto from "App/Dtos/TransactionsDto";
import Transaction from "App/Models/Transaction";
import TransactionRepository from "App/Repositories/User/TransactionRepository";

@inject()
export default class transactionUseCase {
    constructor(
        private readonly transactionRepository: TransactionRepository
    ) { }


    public async run(transactionDto: TransactionDto): Promise<Transaction> {
        const transaction = await this.transactionRepository.create(transactionDto)
        return transaction
    }
}