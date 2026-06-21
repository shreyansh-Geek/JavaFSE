DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Name, Balance FROM Customers;
BEGIN
    FOR r IN c_customers LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Customer ' || r.Name || ' promoted to VIP');
        END IF;
    END LOOP;
    
    COMMIT;
END;
/
