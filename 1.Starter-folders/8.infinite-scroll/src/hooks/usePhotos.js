import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function usePhotos(querySearch, pageIndex) {
  const [error, setError] = useState({
    msg: "",
    state: false,
  });
  const [photos, setPhotos] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (photos.length !== 0 && maxPages !== 0) {
      setPhotos([]);
      setMaxPages(0);
    }
  }, [querySearch]);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${querySearch}&client_id=${
        import.meta.env.VITE_UNSPLASH_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}, ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setPhotos((state) => [...state, ...data.results]);
        setMaxPages(data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setError({
          msg: err.message,
          state: true,
        });
        setLoading(false);
      });
  }, [querySearch, pageIndex]);

  return { error, photos, maxPages, loading };
}
