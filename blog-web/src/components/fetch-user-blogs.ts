import { toast } from "sonner";

export const fetchUserBlogs = async () => {
  const userString = localStorage.getItem("user");
  if (!userString) {
    toast.error("User not found ");
    return null;
  }

  const user = JSON.parse(userString);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_BLOG}/user/${user._id}/blogs`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(`Error fetching blogs: ${errorData.message || "Unknown error"}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(`Error: ${(error as Error).message}`);
    return null;
  }
};
