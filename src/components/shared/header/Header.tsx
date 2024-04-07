import {
  Landmark,
  LogIn,
  MessageSquareText,
  Plus,
  UserPlus,
} from "lucide-react";

const Header = () => {
  const user = false;

  return (
    <nav className="p-4 bg-primary-main text-white">
      <div
        className={`${
          user ? "" : "container "
        } mx-auto flex items-center justify-between`}
      >
        <h1 className="text-2xl font-bold">TYPCM</h1>

        <div className="flex flex-row gap-5 items-center">
          {user ? (
            <>
              {/* <NotificationDropdown /> */}
              <MessageSquareText />
            </>
          ) : (
            <>
              <button className="px-4 py-1 rounded-full flex items-center gap-2 font-semibold text-white border hover:bg-light-main duration-300 hover:text-dark-main">
                <UserPlus size={18} /> Sign Up
              </button>
              <button className="px-4 py-1 rounded-full flex items-center gap-2 font-semibold text-white border hover:bg-light-main duration-300 hover:text-dark-main">
                <LogIn size={18} /> Sign In
              </button>
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
