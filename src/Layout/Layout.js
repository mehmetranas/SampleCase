import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";

function Layout({ children }) {
  return (
    <>
      <header>
        <div className="hidden md:block">
          <DesktopHeader />
        </div>
        <div className="block md:hidden">
          <MobileHeader />
        </div>
      </header>
      <main>
        <div className="bg-black bg-opacity-80">
          <div className="flex justify-center items-center h-screen w-screen">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;
