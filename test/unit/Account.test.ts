import { Account } from "../../src/Account";
import { expect, jest, test } from "@jest/globals";
import { Output } from "../../src/Output";
import { TransactionsRegistry } from "../../src/TransactionsRegistry";
import { Transaction } from "../../src/Transaction";

test("Should deposit", () => {
    //Given
    const output: Output = new Output();   
    const transactionsRegistry: TransactionsRegistry = new TransactionsRegistry();
    const account: Account = new Account(output, transactionsRegistry);
    const spy = jest.spyOn(transactionsRegistry, "add");
    
    //When
    account.deposit(1000);

    //Then
    expect(spy).toBeCalledWith(new Transaction(1000));
});