import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function usePhotos() {
  const [error, setError] = useState({
    msg: "",
    state: false,
  });
  const [photos, setPhotos] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [loading, setLoading] = useState(true);

  return { error, photos, maxPages, loading };
}
