import { Container } from '@/components/ui/container/container';
import HomeHero from '@/components/home/home-hero/home-hero';
import IphoneSection from '@/components/home/iphone-section/iphone-section';
import ProductSection from '@/components/home/product-section/product-section';
import TvSection from '@/components/home/tv-section/tv-section';

export default function HomePage() {
  return (
    <>
      <Container>
        <HomeHero />
      </Container>
      <IphoneSection />
      <ProductSection />
      <TvSection />
    </>
  );
}
