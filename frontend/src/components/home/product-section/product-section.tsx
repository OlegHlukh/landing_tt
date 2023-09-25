import { FC } from 'react';
import './product-section.scss';
import SectionTitle from '@/components/ui/section-title/section-title';
import CategoryList from '@/components/ui/category-list/category-list';
import { Container } from '@/components/ui/container/container';
import ProductListWrapper from '@/components/home/product-list-wrapper/product-list-wrapper';

const ProductSection: FC = () => {
  return (
    <section className='product-section'>
      <div className={'product-section__bg'}>
        <Container>
          <div className={'product-section__title'}>
            <SectionTitle title={'Explore in'} strongTitle={'Products'} />
            <CategoryList />
          </div>
        </Container>
      </div>
      <Container>
        <div className='product-section__list'>
          <ProductListWrapper />
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
