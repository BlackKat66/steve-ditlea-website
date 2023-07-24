import Divider from "../components/divider";
import Photo from "./photo";
import { getPhotos } from "@/app/utils";

export const revalidate = 60;

const Photos = async () => {
  const photos = await getPhotos();

  const parsedPhotos = photos.map((item) => ({
    subject: item.fields.subject as string,
    location: item.fields.location as string,
    // @ts-ignore
    photoLink: item.fields.photo.fields.file.url as string
  }));

  return (
    <section className="page-section portfolio" id="photos" style={{marginTop: "-3rem"}}>
      <div className="container">
        <Divider iconClass="fa fa-camera" title="Photos" />
        <div className="row">
        {parsedPhotos.map((photoProps, index) => (
            <div className="col col-12 col-sm-12 col-lg-6" key={`photo-${index}`}>
              <Photo {...photoProps} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 

export default Photos; 