DECLARE
    CURSOR c_accounts IS
        SELECT AccountID, Balance, AccountType FROM Accounts
        FOR UPDATE;
    
    v_annual_fee CONSTANT NUMBER := 50;
BEGIN
    FOR r IN c_accounts LOOP
        UPDATE Accounts
        SET Balance = Balance - v_annual_fee,
            LastModified = SYSDATE
        WHERE CURRENT OF c_accounts;
        
        DBMS_OUTPUT.PUT_LINE('Applied $' || v_annual_fee || ' fee to account ' || 
                             r.AccountID || ' (' || r.AccountType || ')');
    END LOOP;
    
    COMMIT;
END;
/
