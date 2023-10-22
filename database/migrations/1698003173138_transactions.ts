import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.integer('amount').notNullable()
      table.string('description', 500).notNullable();
      table.string('method_of_payment').notNullable();
      table.string('number_of_card').notNullable();
      table.string('name_of_the_card_owner').notNullable();
      table.date('data_expiration_card').notNullable()
      table.string('verification_code_card').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
