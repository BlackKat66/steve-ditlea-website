import Divider from "../components/divider";
import Photo from "./photo";
import { demoPhotos } from "./demoPhotos";

const Photos = () => (
  <section className="page-section portfolio" id="photos" style={{marginTop: "-3rem"}}>
    <div className="container">
      <Divider iconClass="fa fa-camera" title="Photos" />
      <div>
        {demoPhotos.map((photoProps, index) => <Photo {...photoProps} key={`photo-${index}`} />)}
      </div>
    </div>
  </section>
);

export default Photos; 