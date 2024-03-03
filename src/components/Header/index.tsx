import Image from "next/image";
import Ubutton from "../ui/Ubutton";
import logo from "@/assets/images/Logo.png";

const Header = () => {
    return (
        <div className=" bg-image md:min-w-max  mx-auto">
            <div className="container-size md:h-[690px] bg-linear pb-5">
                <header className=" gap-4 flex h-[60px] items-center ">
                  <Image src={logo} width={58} height={58} alt="logo" className="rounded-full"/>  <p className="font-bold text-lg2">Уют хаус</p>
					
					
                </header>
                <section className="mt-12">
                    <p className="text-xl text-blue">Уют, Tепло и Чисто</p>
                    <h1 className="font-bold md:text-[58px] text-[36px] text-text-color leading-[60px] md:w-[452px] h-[320px]">
						Остановитесь <br /> <span className="text-blue">у нас</span> <br /> и почувствуйте себя как
                        <span className="text-blue"> дома</span>.
                    </h1>
                    
					
					
                </section>
                <section className="p-5 rounded-lg mt-5 text-md backdrop-blur-md md:flex md:flex-row flex-col gap-4 md:w-[800px] justify-between  py-6">
                    <div className="flex items-center h-full gap-4">
                        <div className="border-r border-r-gray-400 pr-5 mt-4 md:mt-0">
                            <p>Заезд </p>
                            <p>12:00</p>
                        </div>
                        <div className="border-r border-r-gray-400 px-5">
                            <p>Отъезд </p>
                            <p>12:00</p>
                        </div>
                        <div className=" px-5">
                            <p>Гость </p>
                            <p>1 вз <strong className="text-blue">800</strong>  сом</p>
                        </div>
                    </div>
					<div className="leading-5 text-lg font-bold flex flex-col gap-3 my-4 md:m-0">
						<a href="tel:+996553002992">+996 553 00 29 92</a>
						<a href="tel:+996772100506">+996 772 10 05 06</a>
					</div>
                    <a href="tel:+996553002992"><Ubutton className="">Позвонить</Ubutton></a>
                </section>
            </div>
        </div>
    );
};

export default Header;

{/* <div className="flex gap-3 items-center mt-5">
					<p className="text-xl font-bold">Адрес</p>

						<div className="leading-5 text-lg font-bold">
						<p>Кыргызстан, г.Ош, ул. Алиева 49</p>
						</div>
						
                    {/* <Ubutton className="">Позвонить</Ubutton> */}

					// </div>
					// <div className="flex gap-3 items-center">
					// <p className="text-xl font-bold">Телефоны</p>

					// 	<div className="leading-5 text-lg font-bold">
					// 	<p>+996 553 00 29 92</p>
					// 	<p>+996 772 10 05 06</p>
					// 	</div>
						
                    // {/* <Ubutton className="">Позвонить</Ubutton> */}

					// </div> */}