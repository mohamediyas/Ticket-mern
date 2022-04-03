import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, ssetLoggedIn] = useState(false);

  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      ssetLoggedIn(true);
    } else {
      ssetLoggedIn(false);
    }

    setCheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
};
