import twogis from "@/assets/images/2gis.png";
import booking from "@/assets/images/booking.png";
import google from "@/assets/images/google-maps.png";
import ostrovok from "@/assets/images/ostrovok_logo_png.png";
import Image from "next/image";

const cooperData = [
{
	name:"2GIS",
	href:"https://go.2gis.com/m7utj",
	icon:twogis
},
{
	name:"Booking",
	href:"https://www.booking.com/hotel/kg/uiut-khostel-osh.ru.html",
	icon:booking
},
{
	name:"Google maps",
	href:"https://g.co/kgs/9HQ7HGA",
	icon:google
},
{
	name:"Ostrovok",
	href:"https://ostrovok.ru/hotel/kyrgyzstan/osh2/mid10479279/uyut_house_osh_hostel/",
	icon:ostrovok
},
]

const Cooperation = () => {
  return (
	<div className="my-10">
		<h2 className="text-[58px] font-bold text-text-color text-center mb-8">Мы сотрудничаем</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 justify-items-center">
            {cooperData.map((item)=> (<div key={item.name}>
				<a href={item.href} target="_blank" rel="noopener noreferrer" className="min-w-[40px] min-h-[40px] flex flex-col justify-center items-center hover:translate-y-4">
                    <Image width={80} height={80} src={item.icon} alt={item.name} className=" object-cover rounded-[60px] overflow-hidden  shadow-2xl hover:-translate-y-4 transition-all ease-linear" />
					<p className="text-center font-bold text-lg2">{item.name}</p>
				</a>
				
			</div>))}
        
    </div>

	</div>
  )
}

export default Cooperation