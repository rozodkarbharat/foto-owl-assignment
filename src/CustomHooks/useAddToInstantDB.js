import { useState } from "react";
import { db } from "../db";
import { id } from '@instantdb/react';


const useAddToInstantDB = (tablename) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const addData = async (data) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {

            db.transact(
                db.tx[tablename][id()].update(data)
              )
            setSuccess(true);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return { addData, loading, error, success };
};

export default useAddToInstantDB;
