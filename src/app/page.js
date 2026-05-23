import BannerPage from "@/componets/Banner";
import OurGraowing from "@/componets/OurGraowing";
import SportsBanner from "@/componets/SportsBanner";
import PlayersPage from "@/componets/PlayersPage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <SportsBanner></SportsBanner>
      <OurGraowing></OurGraowing>
      <PlayersPage></PlayersPage>
    </div>
  );
}
