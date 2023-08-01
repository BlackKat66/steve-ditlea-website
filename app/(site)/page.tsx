import Image from "next/image";
import Divider from "./components/divider";
import { getHomePageCopy } from "../utils";

// Revalidates the cache every 60 seconds, so that new content can be loaded 
// relatively quickly.
export const revalidate = 60;

const Home = async () => {
  const homePageCopyData = await getHomePageCopy(); 

  const { introBlurb, listOfNames, rightColumn, bottomBlurb } = homePageCopyData[0].fields;

  const parsedRightColumn = String(rightColumn).split('\n\n');

  return (
    <section className="page-section bg-primary text-black mb-0 text-black" id="about" style={{marginTop: "-3rem"}}>
      <div className="container">
        <Divider iconClass="fas fa-house-user" title="Home" />
        <div className="row">
          <div className="col-lg-6 mr-auto">
            <p className="lead">{ String(introBlurb) }</p>
            <p className="lead"> {String(listOfNames)}</p>
          </div>
          <div className="col-lg-6 mr-auto">
            {parsedRightColumn.map((item, index) => <p className="lead" style={{ whiteSpace: "pre-wrap" }} key={`p-${index}`}>{item}</p>)}
            <p className="text-center">
              <Image src="/sheena_cats_small.png" height={180} width={180} alt="picture of a black cat" className="img-fluid" />
            </p>
            <p className="lead" style={{ whiteSpace: "pre-wrap" }}>{ String(bottomBlurb) }</p>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default Home; 