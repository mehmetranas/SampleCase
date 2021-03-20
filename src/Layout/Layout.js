import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
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
