import Article from './article';
import { demoArticles } from './demoArticles';

const Articles = () => (
  <section className="page-section portfolio" id="articles" style={{marginTop: "-3rem"}}>
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Articles</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="far fa-newspaper" style={{fontSize: "3.5rem"}}></i></div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="container">
        <table className="table">
          <tbody>
            {demoArticles.map(({
              articleLink,
              imageLink,
              headline,
              description,
              publishedBy
            }) => (
              <Article 
                articleLink={articleLink}
                imageLink={imageLink}
                headline={headline}
                description={description}
                publishedBy={publishedBy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Articles; 