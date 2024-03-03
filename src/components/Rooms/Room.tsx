import Image, { StaticImageData } from "next/image";
import { IRoom } from ".";

const Room = ({ room }: { room: IRoom }) => {
    return (
        <div className="  rounded-lg relative overflow-hidden group backdrop-saturate-200 shadow-2xl px-5 md:px-0">
            <Image
                width={400}
                height={400}
                src={room.image.src}
                alt="room"
                className="w-full h-full object-cover "
            />
            <div className="absolute shadow-2xl right-3 top-3 rounded-lg h-[100px] font-bold w-[200px]  text-[16px] text-text-color transition-all ease-linear backdrop-blur-sm bg-white bg-opacity-50 p-3">
				<p>Кровать {room.place}</p>
				<p>Цена на 1 чел. {room.person} сом</p>
				<p>Цена за комнату {room.price}</p>
			</div>
        </div>
		
    );
};

export default Room;
