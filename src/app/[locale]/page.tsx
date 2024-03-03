import Cooperation from "@/components/Cooperation";
import Rooms from "@/components/Rooms";

export default function Home() {
  return (
    <main className="container mx-auto mt-5">
      <Rooms/>
      <Cooperation/>
    </main>
  );
}
