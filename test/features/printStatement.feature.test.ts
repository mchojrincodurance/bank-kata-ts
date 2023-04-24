import { expect, jest, test } from "@jest/globals";
import { Account } from "../../src/Account";
import { Output } from "../../src/Output";

test("Print statement", () => {
    const output: Output = new Output();
    const spy = jest.spyOn(output, "print");
    const account: Account = new Account(output);

    /**
     *  Given a client makes a deposit of 1000 on 10-01-2012
    And a deposit of 2000 on 13-01-2012
    And a withdrawal of 500 on 14-01-2012 */
    
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    /**
     * When they print their bank statement
     */

    account.printStatement();
    
    /**
     * 
     * Then they would see:

    Date       || Amount || Balance
    14/01/2012 || -500   || 2500
    13/01/2012 || 2000   || 3000
    10/01/2012 || 1000   || 1000
        */
    expect(spy).toHaveBeenCalledWith("Date       || Amount || Balance");
    expect(spy).toHaveBeenCalledWith("14/01/2012 || -500   || 2500");
    expect(spy).toHaveBeenCalledWith("13/01/2012 || 2000   || 3000");
    expect(spy).toHaveBeenCalledWith("10/01/2012 || 1000   || 1000");
});