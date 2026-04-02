import { useParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import useSearchData from '../hooks/useSearchData';
import ErrorFull from '../../../shared/ui/errors/errorFull/ErrorFull';
import LoaderFull from '../../../shared/ui/loaders/loaderFull/LoaderFull';
import ShowcaseProduct from '../../products/components/showcaseProduct/ShowcaseProduct';
import { ProductItem } from '../../../shared/utils/types';

export function SearchPage() {
  const { query } = useParams();

  const { data, error, isError, isFetching } = useSearchData(query ?? "");

  if (isFetching) {
    return <LoaderFull />
  }

  if (error && isError) {
    return <ErrorFull message={error.message} />
  }

  console.log(data);

  return (
    <section className={`${styles.searchPage} container-padding`}>
      <h1 className={styles.title}>{data.length > 0 ? `Search results for: ${query}` : `No results found for: ${query}`}</h1>

      {data.length > 0 ?
        <ul className={styles.searchGallery}>
          {data.map((product: ProductItem) => <ShowcaseProduct item={product} />)}
        </ul>
        : null}
    </section>
  )
}
