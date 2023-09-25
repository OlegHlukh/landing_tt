import {Product} from "@/models/product";
import {FC} from "react";
import './card.scss';
import Image from "next/image";
import placeholder from '@/assets/placeholder.svg';
import Button from "@/components/ui/button/button";
import {FILE_URL} from "@/api/config";

interface CardProps {
  product: Product;
}


const Product: FC<CardProps> = ({product}) => {

  const image = product.imageUrl ? `${FILE_URL}/${product.imageUrl}` : placeholder;

  return <div className='card'>
   <div className={'card__image'}>
    <Image
      src={image}
      alt={'image'}
      objectPosition={'center'}
      objectFit={'cover'}
      fill
      quality={100}
    />
   </div>
    <div className={'card__container'}>
      <div className={'card__title'}>
        <div className='card__name'>{product.name}</div>
        <div className='card__price'>{product.price}</div>
      </div>

    <div className={'card__button'}>
      <Button text={'Detail'} />
    </div>
    </div>
  </div>
}

export default Product;
