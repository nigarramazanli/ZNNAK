import { FeaturedProducts} from "./FeaturedProducts/FeaturedProducts";
import { LatestProducts } from "./LatestProducts/LatestProducts";
import { ShopexOffer } from "./ShopexOffer/ShopexOffer";

export const HomePage = () => {
  return(
    <>
    <FeaturedProducts/>
    <LatestProducts/>
    <ShopexOffer/>
    </>
  )
};