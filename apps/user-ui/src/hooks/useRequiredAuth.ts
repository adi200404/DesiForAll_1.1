import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "./useUser";

const useRequireAuth = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  return { user, isLoading };
};

export default useRequireAuth;
