import BannerPage from "@/componets/Banner";
import OurGraowing from "@/componets/OurGraowing";
import SportsBanner from "@/componets/SportsBanner";
import PlayersPage from "@/componets/PlayersPage";
import Nextmatch from "@/componets/Nextmatch";
import SportsBannerPage from "@/componets/SportsBannerPage";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <SportsBannerPage></SportsBannerPage>
      <SportsBanner></SportsBanner>
      <OurGraowing></OurGraowing>
      <PlayersPage></PlayersPage>
      <Nextmatch></Nextmatch>
    </div>
  );
}
