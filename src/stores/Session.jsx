import React, { createContext, useContext, useCallback, useState } from "react";

import Api from "../services/api";

const SessionContext = createContext({});

const SessionContextProvider = ({ children }) => {
  const [session, setSession] = useState(() => {
    const profile = localStorage.getItem("@CROP_SCOUT:profile");

    if (!profile) {
      return {};
    }

    return {
      profile: JSON.parse(profile),
    };
  });

  const signIn = useCallback(async ({ email, password }) => {
    const signInResponse = await Api.post({
      pathUrl: "auth",
      data: {
        email,
        password,
      },
    });

    if (!signInResponse) {
      localStorage.removeItem("@CROP_SCOUT:profile");
      setSession({});
      return;
    }

    localStorage.setItem(
      "@CROP_SCOUT:profile",
      JSON.stringify(signInResponse.data.user)
    );

    setSession({
      profile: signInResponse.data.user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@CROP_SCOUT:profile");

    setSession({});
  }, []);

  return (
    <SessionContext.Provider
      value={{
        profile: session.profile,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

function useSession() {
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error("useSession should be inside of a SessionContextProvider");
  }

  return session;
}

export { SessionContextProvider, useSession };
