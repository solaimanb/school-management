import {
  Landmark,
  LogIn,
  MessageSquareText,
  Plus,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const user = false;

  return (
    <nav className="p-4 bg-primary-main text-white">
      <div
        className={`${
          user ? "" : "container "
        } mx-auto flex items-center justify-between`}
      >
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">TYPCM</h1>
        </Link>

        <div className="flex flex-row gap-5 items-center">
          {user ? (
            <>
              {/* <NotificationDropdown /> */}
              <MessageSquareText />
            </>
          ) : (
            <>
              <Link
                href={"/signup"}
                className="px-4 py-1 rounded-full flex items-center gap-2 font-semibold text-white border hover:bg-light-main duration-300 hover:text-dark-main"
              >
                <UserPlus size={18} /> Sign Up
              </Link>
              <Link
                href={"/signin"}
                className="px-4 py-1 rounded-full flex items-center gap-2 font-semibold text-white border hover:bg-light-main duration-300 hover:text-dark-main"
              >
                <LogIn size={18} /> Sign In
              </Link>
            </>
          )}

          {user ? (
            <button className="border px-2 py-1 rounded-full flex gap-2 font-semibold bg-info-main text-white">
              <Landmark />
              Institute
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
