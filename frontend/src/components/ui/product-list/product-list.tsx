import { Product } from '@/models/product';
import { FC, Fragment } from 'react';
import styles from './product-list.module.scss';
import Card from '@/components/ui/card/card';
import api from '@/api';

interface ProductListProps {
  list: Product[];
}

const ProductList: FC<ProductListProps> = ({ list }) => {
  if (!list?.length) {
    return null;
  }

  return (
    <div className={styles.productList}>
      {list.map((el) => (
        <Fragment key={el._id}>
          <Card product={el} />
        </Fragment>
      ))}
    </div>
  );
};

export default ProductList;
