import { useState } from "react";
import { db } from "../db";

const useAddToInstantDB = (path) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const addData = async (data) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            db.transact(() => {
                db.insert(path, { task: 'New Task', completed: false });
            });

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
