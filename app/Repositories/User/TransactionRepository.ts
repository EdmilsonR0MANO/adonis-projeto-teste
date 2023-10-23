import Transaction from 'App/Models/Transaction';
import TransactionDto from 'app/Dtos/TransactionsDto'



export default class TransactionRepository{
    public async create(transaction: TransactionDto): Promise<Transaction> {
        return await Transaction.create(transaction)
        
    }
}