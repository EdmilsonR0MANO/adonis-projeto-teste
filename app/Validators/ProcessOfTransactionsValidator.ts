import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, rules, schema } from "@ioc:Adonis/Core/Validator";

export default class ProcessOfTransactionValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    amount: schema.number(),
    description: schema.string(),
    methodOfPayment: schema.string(),
    numberOfCard: schema.string({}, [
      rules.minLength(16),
      rules.maxLength(16)
    ]),
    nameOfTheCardOwner: schema.string(),
    dataExpirationCard: schema.date({ format: "yyyy-MM-dd" }),
    verificationCodeCard: schema.string({}, [
      rules.minLength(3),
      rules.maxLength(3)
    ])
  })

  public messages: CustomMessages = {
    "numberOfCard.minLength": "O número do cartão deve ter 16 dígitos",
    "numberOfCard.maxLength": "O número do cartão deve ter 16 dígitos",
    "verificationCodeCard.minLength": "O código de verificação deve ter três dígitos",
    "verificationCodeCard.maxLength": "O código de verificação deve ter três dígitos",
    "dataExpirationCard.dateFormat": "A data de expiração do cartão deve ter o formato yyyy-MM-dd"
  }
}
