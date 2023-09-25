import api from '@/api';
import { Suspense } from 'react';
import { TvShow } from '@/models/tv-show';
import './tv-seciton.scss';
import { Container } from '@/components/ui/container/container';
import TvShowList from '@/components/home/tv-section/tv-shows-list';

const TvSection = async () => {
  const tvShowList = await getTvShows();

  return (
    <Suspense fallback={'Loading'}>
      <section className={'tv-section'}>
        <Container>
          <h2>Tv shows</h2>
          <TvShowList list={tvShowList} />
        </Container>
      </section>
    </Suspense>
  );
};

const getTvShows = async (): Promise<TvShow[]> => {
  const result = await api.tvShow.getAll({
    limit: 5,
  });

  if (!result.ok) {
    throw new Error();
  }

  return result.json();
};

export default TvSection;
