import { inject } from "@adonisjs/fold";
import TransactionDto from "App/Dtos/TransactionsDto";
import Transaction from "App/Models/Transaction";
import TransactionRepository from "App/Repositories/User/TransactionRepository";

@inject()
export default class transactionUseCase {
    constructor(
        private readonly transactionRepository: TransactionRepository
    ) { }


    public async run(Transaction: TransactionDto): Promise<Transaction> {
        Transaction.numberOfCard = Transaction.numberOfCard.substr(-4)
        const transaction = await this.transactionRepository.create(Transaction)
        console.log(transaction)
        return transaction
    }
}