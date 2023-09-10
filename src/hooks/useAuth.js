// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";

// export function useAuth(jwt) {
//   const [userId, setUserId] = useState(1);
//   const [jwtErrorMessage, setJwtErrorMessage] = useState(false);

//   useEffect( () => {
//     if (jwt) {
//       try {
//         const decoded = await jwt_decode(jwt);
//         setUserId(decoded.id);
//       } catch (error) {
//         setJwtErrorMessage(true);
//         console.log("error", error);
//       }
//     }
//   }, []);

//   return { userId, jwtErrorMessage };
// }
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export function useAuth(jwt) {
  const [userId, setUserId] = useState(null); // Initialize userId as null
  const [jwtErrorMessage, setJwtErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchUserId() {
      if (jwt) {
        try {
          const decoded = await jwt_decode(jwt);
          setUserId(decoded.id);
        } catch (error) {
          setJwtErrorMessage(true);
          console.log("error", error);
        }
      }
    }

    fetchUserId();
  }, [jwt]);

  // Return null until userId is set
  if (userId === null) {
    return { userId, jwtErrorMessage };
  }

  return { userId, jwtErrorMessage };
}
