import Article from './article';
import Divider from '../components/divider';
import { demoArticles } from './demoArticles';

const Articles = () => (
  <section className="page-section portfolio" id="articles" style={{marginTop: "-3rem"}}>
    <div className="container">
      <Divider iconClass="far fa-newspaper" title="Articles" />
      <div className="container">
        <table className="table">
          <tbody>
            {demoArticles.map(({
              articleLink,
              thumbnailLink,
              headline,
              description,
              publishedBy
            }, index) => (
              <Article 
                articleLink={articleLink}
                thumbnailLink={thumbnailLink}
                headline={headline}
                description={description}
                publishedBy={publishedBy}
                key={`article-${index}`}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Articles; 