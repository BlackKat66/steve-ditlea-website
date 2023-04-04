
import Image from "next/image";

const Extras = () => (
  <section className="page-section portfolio" id="extras" style={{marginTop: "-80px"}}>
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">EXTRA</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="far fa-chart-network" style={{fontSize: "3.5 rem"}}></i></div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="container">
        <table className="table">
          <tbody>
            <tr style={{width: "80%"}}>

              <td width="30%">
                <Image 
                  src="/steve_digital_deli.png" 
                  className="img-fluid" 
                  alt="Book Icon"
                  width={360}
                  height={240}
                />
              </td>
              <td width="70%">
                <p className="article-text" style={{fontWeight: 800}}>
                  <a 
                    className="article-text" 
                    style={{fontWeight: 800}}
                    href="https://www.atariarchives.org/deli/" 
                    target="_blank"
                  >
                  The Story Behind the Digital Deli
                  </a>
                </p>
                <p className="article-text" style={{fontWeight: 400}}>
                  How did this now-classic collection of original works capturing the computer culture in its early days (1984) come about?
                  </p>
                <p style={{fontWeight: 200}}></p>
                <p className="article-text" style={{fontWeight: 400}}>The Introduction tells it all: just click here... </p>
                <p 
                  className="text-sm-right" 
                  style={{ paddingTop: "1.5 rem", fontSize: "1.2 rem", fontStyle: "italic", color: "black" }}
                >
                  <a 
                    href="https://www.atariarchives.org/deli/introduction.php" 
                    target="_blank" 
                    className="text-sm-right"
                    style={{ paddingTop: "1.5 rem", fontSize: "1.2 rem", fontStyle: "italic" }}
                  >
                    Digital Deli Introduction
                  </a>
                </p>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  </section>
);

export default Extras; 