import { useState, useEffect, useRef } from "react";
import api from "instance/api";

const useFetchFacts = (count = 15) => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false); 
  useEffect(() => {
    if (hasFetched.current) return; 
    hasFetched.current = true;

    const fetchFacts = async () => {
      setLoading(true);
      setError(null);

      try {
        const promises = Array.from({ length: count }, () => api.get("/random"));
        const results = await Promise.allSettled(promises);

        const fetchedFacts = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value.data);

        if (fetchedFacts.length === 0) {
          throw new Error("Failed to fetch facts.");
        }

        setFacts(fetchedFacts);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacts();
  }, [count]);

  return { facts, loading, error };
};

export default useFetchFacts;
