
import { DateTime } from "luxon";
export default interface transactionDto {
    amount: number;
    description: string;
    methodOfPayment: string;
    numberOfCard: string;
    nameOfTheCardOwner: string;
    dataExpirationCard: DateTime;
    verificationCodeCard:string;
}