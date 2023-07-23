// This page is called "Stories," but individual pieces of content fetched from Contentful here
// are called "articles". This might be a bit confusing re: namespacing, but is the result of a
// last-minute editorial change by Steve near the end of me working on the project - he wanted me
// to switch "Articles" to "Stories". I didn't have sufficient time to correct this at the API level
// on Contentful, so I changed Articles to Stories in all places that would be visible to the user 
// and left everything else as-is with the pre-existing namespacing. 

import { DateTime } from "luxon";

import Article from './article';
import Divider from '../components/divider';
import { getArticles } from '@/app/utils';

const Stories = async () => {
  const articles = await getArticles();

  console.log({ rawPublicationDates: articles.map((item) => item.fields.publicationDate) });

  const parsedArticles = articles.map((item: any) => ({
    headline: item.fields.headline as string,
    description: item.fields.description || "" as string,
    publishedBy: item.fields.publishedBy as string,
    // @ts-ignore
    publicationDate: DateTime.fromISO(item.fields.publicationDate.split("T")[0]).toFormat("MMMM d, y"),
    // @ts-ignore
    articleLink: item.fields.article.fields.file.url as string,
    // @ts-ignore
    thumbnailLink: item.fields.thumbnail ? item.fields.thumbnail.fields.file.url as string : undefined
  }));

  console.log(parsedArticles); 

  return (
    <section className="page-section portfolio" id="articles" style={{marginTop: "-3rem"}}>
      <div className="container">
        <Divider iconClass="far fa-newspaper" title="Stories" />
        <div className="container">
          <table className="table">
            <tbody>
              {
                // @ts-ignore
                parsedArticles.map((articleProps, index) => <Article {...articleProps} key={`article-${index}`} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}; 

export default Stories; 