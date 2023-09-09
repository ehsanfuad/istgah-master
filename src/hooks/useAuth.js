import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export function useAuth(jwt) {
  const [userId, setUserId] = useState(null);
  const [jwtHasError, setJwtHasError] = useState(false);

  useEffect(() => {
    if (jwt) {
      try {
        const decoded = jwt_decode(jwt);
        setUserId(decoded.id);
      } catch (error) {
        setJwtHasError(true);
        console.log("error", error);
      }
    }
  }, []);

  return { userId, jwtHasError };
}
