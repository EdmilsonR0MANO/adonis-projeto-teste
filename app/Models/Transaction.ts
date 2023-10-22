import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from "./Base/UuidBase";

export default class Transaction extends UuidBase {

  @column()
  amount: number;

  @column()
  description: string;

  @column()
  methodOfPayment: string;

  @column()
  numberOfCard: string;

  @column()
  nameOfTheCardOwner: string;

  @column()
  dataExpirationCard: DateTime;

  @column()
  verificationCodeCard: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
