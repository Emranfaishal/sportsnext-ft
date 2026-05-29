import BannerPage from "@/componets/Banner";
import OurGraowing from "@/componets/OurGraowing";
import SportsBanner from "@/componets/SportsBanner";
import PlayersPage from "@/componets/PlayersPage";
import Nextmatch from "@/componets/Nextmatch";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <SportsBanner></SportsBanner>
      <OurGraowing></OurGraowing>
      <PlayersPage></PlayersPage>
      <Nextmatch></Nextmatch>
    </div>
  );
}
