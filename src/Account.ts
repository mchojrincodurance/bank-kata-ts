import { Output } from "./Output";
import { Transaction } from "./Transaction";
import { TransactionsRegistry } from "./TransactionsRegistry";

export class Account {
  private _output: Output;
  private _deposit: number = 0;
  private _transactionsRegistry: TransactionsRegistry;

  constructor(output: Output, registryAccount: TransactionsRegistry) 
  {
    this._output = output;
    this._transactionsRegistry = registryAccount;
  }
  
  public deposit(amount: number): void
  {
    this._transactionsRegistry.add(new Transaction(1000));
  }

  public withdraw(amount: number): void
  {

  }

  public printStatement(): void
  {

  }
}