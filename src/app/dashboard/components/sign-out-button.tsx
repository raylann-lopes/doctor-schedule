"use client";

import router from "next/router";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/authentication"); // Redirect to authentication page after sign out
            },
          },
        })
      }
    >
      Logout
    </Button>
  );
};

export default SignOutButton;
