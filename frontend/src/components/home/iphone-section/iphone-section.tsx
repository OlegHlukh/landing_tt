import { FC } from 'react';
import SectionTitle from '@/components/ui/section-title/section-title';
import './iphone-section.scss';
import { Container } from '@/components/ui/container/container';
import ProductList from '@/components/ui/product-list/product-list';
import arrow from '@/assets/arrow.right.svg';
import Link from 'next/link';
import { Product } from '@/models/product';
import api from '@/api';

const IphoneSection: FC = async () => {
  const iphoneList = await getIphoneList();

  return (
    <section className='iphone-section'>
      <div className='iphone-section__bg'>
        <Container>
          <div className={'iphone-section__title'}>
            <SectionTitle title={'Get Your'} strongTitle={'iPhone'} />
            <Link href={'/product'} className={'iphone-section__button'}>
              see all
              <img src={arrow.src} alt={'arrow right icon'} />
            </Link>
          </div>
        </Container>
      </div>
      <div className='iphone-section__list'>
        <Container>
          <ProductList list={iphoneList} />
        </Container>
      </div>
    </section>
  );
};

const getIphoneList = async (): Promise<Product[]> => {
  const res = await api.products.getAll({
    category: 'IPhone',
    limit: 4,
  });

  if (!res.ok) {
    throw new Error('Can not get products');
  }

  return res.json();
};

export default IphoneSection;
