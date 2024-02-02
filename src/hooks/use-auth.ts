import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      toast.success("Signed out successfully.");

      router.push("/sign-in");

      router.refresh();
    } catch (error) {
      toast.error("Couldn't sign out. Please try again later.");
    }
  };

  return { signOut };
};
