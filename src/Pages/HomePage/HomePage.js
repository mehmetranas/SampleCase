import logo from "../../logo.svg";
function HomePage() {
  return (
    <div className="bg-black bg-opacity-80">
      <div className="flex justify-center items-center h-screen w-screen">
        <dialog
          open
          className="rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none">
              <img
                src={logo}
                alt="ReactJS"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
            </div>
            <div className="w-full">
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-bold mb-8" onClick="test">
                    React
                  </h3>
                </div>
                <div className="relative">
                  <div className="p-2 h-48 overflow-y-auto rounded-b-xl rounded-tr-xl">
                    <div>
                      <p className="text-xl text-gray-500 line-clamp-3">
                        React, interaktif kullanıcı arayüzü geliştirmeyi
                        zahmetsiz hale getirir. Siz uygulamanızdaki her durum
                        için basit sayfalar tasarlayın. React, veriniz
                        değiştiğinde sadece doğru bileşenleri verimli bir
                        şekilde güncellesin ve oluştursun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default HomePage;
