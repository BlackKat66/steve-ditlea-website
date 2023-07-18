import Article from './article';
import Divider from '../components/divider';
import { getArticles } from '@/app/utils';

const Articles = async () => {
  const articles = await getArticles();

  const parsedArticles = articles.map((item) => ({
    headline: item.fields.headline as string,
    description: item.fields.description as string,
    publishedBy: item.fields.publishedBy as string,
    // @ts-ignore
    articleLink: item.fields.article.fields.file.url as string,
    // @ts-ignore
    thumbnailLink: item.fields.thumbnail ? item.fields.thumbnail.fields.file.url as string : undefined
  }));

  return (
    <section className="page-section portfolio" id="articles" style={{marginTop: "-3rem"}}>
      <div className="container">
        <Divider iconClass="far fa-newspaper" title="Articles" />
        <div className="container">
          <table className="table">
            <tbody>
              {parsedArticles.map((articleProps, index) => <Article {...articleProps} key={`article-${index}`} />)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}; 

export default Articles; 