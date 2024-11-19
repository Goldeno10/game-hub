import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface FetchedGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchedGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenre;
