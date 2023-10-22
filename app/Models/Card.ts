import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @hasOne(() => User, {
    foreignKey: 'user_id',
  })
  public user: HasOne<typeof User>
  
  @column()
  numberOfCard: number;

  @column()
  dataExpirationCard: DateTime

  @column()
  verificationCodeCard: number;



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
