import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";

export function Profile() {
  const user = localStorage.getItem("user");
  if (!user) return;
  const data = user ? JSON.parse(user) : null;

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/logout`, {
        method: "POST", 
        credentials: "include", 
      });
  
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logout successful!");
  
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  


  return (
    <Sheet>
      <SheetTrigger>
        <Avatar>
          <AvatarImage src={data.profilePicture || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </SheetTrigger>

      <SheetContent className="w-[300px] text-white bg-[#141414] sm:w-[400px]">
        <SheetHeader>
          <div className="flex flex-col items-center gap-3 mt-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={data.profilePicture || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-center text-[#807f7f]">
              <h2 className="text-xl font-semibold ">{data.name || "John"}</h2>
              <p className="text-sm ">{data.email || "john@gmail.com"} </p>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-8 space-y-4 text-[#807f7f]">
          <button className="flex items-center gap-2 hover:text-gray-400">
            <User className="w-4 h-4" />
            Edit Profile
          </button>

          <button className="flex items-center gap-2 hover:text-gray-400">
            <Settings className="w-4 h-4" />
            Settings
          </button>

          <button onClick={handleLogout} className="flex items-center gap-2 hover:text-gray-400">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
