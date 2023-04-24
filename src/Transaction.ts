export class Transaction {
    private _date: Date = new Date();
    private _amount: number;
        
    constructor(amount: number) {
        this._amount = amount;
    }
}