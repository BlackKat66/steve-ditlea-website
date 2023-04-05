
import { FC } from "react";

interface ArticleProps {
  articleLink: string;
  imageLink: string;
  headline: string;
  description: string; 
  publishedBy: string;
}

const Article: FC<ArticleProps>  = ({
  articleLink,
  imageLink,
  headline,
  description,
  publishedBy
}) => (
  <tr style={{ width: "80%" }}>
    <td width="15%">
      <a href={articleLink} target="_top">
        <img src={imageLink} className="img-fluid" alt="Article Icon" />
      </a>
    </td>
    <td width="85%">
      <a 
        className="article-text" 
        style={{ fontWeight: 800 }} 
        href="pdf/Old_45s.pdf"
        target="_top"
      >
        {headline}
        <p style={{ fontWeight: 200 }}>
          {description}
        </p>
      </a>
      <p className="text-sm-right" style={{ paddingTop: "1.5rem", fontSize: "1.2rem", fontStyle: "italic" }}>
        {publishedBy}
      </p>
    </td>
  </tr>
);

export default Article; 