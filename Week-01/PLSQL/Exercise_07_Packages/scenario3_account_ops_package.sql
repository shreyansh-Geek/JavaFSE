CREATE OR REPLACE PACKAGE AccountOperations IS
    PROCEDURE OpenAccount(
        p_account_id NUMBER,
        p_customer_id NUMBER,
        p_account_type VARCHAR2,
        p_initial_balance NUMBER
    );
    
    PROCEDURE CloseAccount(
        p_account_id NUMBER
    );
    
    FUNCTION GetTotalBalance(
        p_customer_id NUMBER
    ) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations IS
    
    PROCEDURE OpenAccount(
        p_account_id NUMBER,
        p_customer_id NUMBER,
        p_account_type VARCHAR2,
        p_initial_balance NUMBER
    ) IS
    BEGIN
        INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
        VALUES (p_account_id, p_customer_id, p_account_type, p_initial_balance, SYSDATE);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Account ' || p_account_id || ' opened for customer ' || p_customer_id);
    END OpenAccount;
    
    PROCEDURE CloseAccount(
        p_account_id NUMBER
    ) IS
    BEGIN
        DELETE FROM Transactions WHERE AccountID = p_account_id;
        DELETE FROM Accounts WHERE AccountID = p_account_id;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Account ' || p_account_id || ' closed.');
    END CloseAccount;
    
    FUNCTION GetTotalBalance(
        p_customer_id NUMBER
    ) RETURN NUMBER IS
        v_total NUMBER;
    BEGIN
        SELECT NVL(SUM(Balance), 0) INTO v_total
        FROM Accounts
        WHERE CustomerID = p_customer_id;
        RETURN v_total;
    END GetTotalBalance;
    
END AccountOperations;
/
