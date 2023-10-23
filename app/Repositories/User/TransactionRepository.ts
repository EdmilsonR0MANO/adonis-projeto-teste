import TransactionDto from 'app/Dtos/TransactionsDto'
import Database from '@ioc:Adonis/Lucid/Database';
import Transaction from 'App/Models/Transaction';

export default class TransactionRepository{
    public async create(transaction: TransactionDto): Promise<Transaction> {
        return await Transaction.create(transaction)
    }

    public async show(listOfTransaction: {}): Promise<Transaction[]> {
        const Transaction = await Database
        .from('transactions')
        .select('*')
        .orderBy('created_at', 'desc')
        return Transaction
    }
}