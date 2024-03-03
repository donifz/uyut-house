import Room from "./Room"
import room2 from "@/assets/images/room-2.jpg";
import room1 from "@/assets/images/room1.jpg";
import room3 from "@/assets/images/room3.jpg";
import room4 from "@/assets/images/room4.jpg";
import { StaticImageData } from "next/image";

export interface IRoom{
	room:number,
    price:number,
	place:number,
	person:number,
	image: StaticImageData,
	title: string
	}

const roomsData = [
	{
	room:1,
    price:3200,
	person:800,
	place:4,
	image: room1,
	title: "Room for four person"
	},
	{
	room:2,
    price:1600,
	person:800,
	place:2,
	image: room2,
	title: "Room for four person"
	},
	{
	room:3,
    price:2400,
	person:800,
	place:3,
	image: room3,
	title: "Room for four person"
	},
	{
	room:4,
    price:1600,
	person:1500,
	place:2,
	image: room4,
	title: "Room for four person"
	},

] as IRoom[]

 
const Rooms = () => {
  return (
	<section className="">
		<div className="flex justify-center">
		<h2 className=" text-text-color font-semibold md:text-xxl text-xl w-[900px] text-center md:leading-tight leading-8 my-6 mb-16">
					<strong className="text-[36px]"><br />Добро пожаловать<br /></strong> <strong className="text-blue">В Наш</strong> уютный и гостеприимный хостел, идеальное место <strong className="text-blue">Для Тех</strong>, кто ценит комфорт, доступность и дружелюбную атмосферу!
                    </h2>
		</div>
		
				{/* <h2 className="text-[58px] font-bold text-text-color text-center mb-8">Наши номера</h2> */}

		<div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
			{roomsData.map((item)=> <Room key={item.room} room={item}/>)}
		</div>
	</section>
  )
}

export default Rooms