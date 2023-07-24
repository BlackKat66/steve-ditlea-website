
import Image from "next/image";
import Divider from "../components/divider";

const Books = () => (
  <section className="page-section portfolio" id="books" style={{ marginTop: "-3rem" }}>
    <div className="container">
      <Divider iconClass="fa fa-book" title="Books" />
      <div className="container">
        <table className="table">
          <tbody>
            <tr style={{ width: "80%" }}>

              <td width="30%"><a href="books/Rock Stars Book_v1.pdf" target="_top">
                <img src="images/rockstars_cover02.png" className="img-fluid" alt="Book Icon" /></a></td>
              <td width="70%">
                <p className="article-text" style={{ fontWeight: "800" }}><a className="article-text" style={{ fontWeight: "800" }}
                  href="https://www.atariarchives.org/deli/" target="_blank">
                  Rock Stars</a></p>
                <p className="article-text" style={{ fontWeight: "400" }}><a href="books/Rock Stars Book V5.pdf"><i
                  className="fas fa-chevron-circle-right" style={{ fontSize: "1.4rem", color: "orange" }} ></i></a><a
                    href="books/Rock Stars Book V5.pdf" target="_top">&nbsp;&nbsp;Free, the complete 1979 book Rock
                    Stars (on Amazon. com up to $999.99)</a></p>

                <p>Rock Stars
                  Scholastic Book Services
                  New York, Toronto, London, Auckland, Sydney, Tokyo.
                  Copyright © 1979 by Steve Ditlea</p>
                <p>Popular music at a crossroads of styles near the end of the eclectic 1970s.</p>

                <p>Called a “classic of kitsch” by one contemporary reviewer, the “rock stars” chosen survived the test
                  of time, or at least four decades.</p>

                <ul className="article-list">
                  <li><b>KISS: Rock ‘n’ Roll All Nite</b><br />
                    See Gene Simmons without his makeup backstage at Madison Square Garden—like a teacher!</li>

                  <li><b>Fleetwood Mac: Thinking About Tomorrow</b><br />
                    Just 7 years after their appearance in their Circus article, the band has grown bigger and older.
                  </li>

                  <li><b>Billy Joel: The Piano Man</b><br />
                    He recalled his best night for tips tickling the ivories in lounges, starting with a major scare…
                  </li>

                  <li><b>Stevie Wonder: Life In The Key of Songs</b><br />
                    With sightlessness his filter, this survivor of a faulty baby incubator kept growing his songbook.
                  </li>

                  <li><b>KC: The Sound of Sunshine</b><br />
                    Living by retirement communities, Harry Wayne Casey is still rocking, like many musicians in the
                    book.</li>

                  <li><b>Sha Na Na: The Peaceful Greasers </b><br />
                    A fond look back at how a college prank turned into the most widely-seen rock music TV series ever!
                  </li>

                  <li><b>Afterword: Punk, Funk, and Future Stars</b><br />
                    Lenny Kaye, guitarist for the Patti Smith Band, explained how rock was about to change, again.</li>
                </ul>


              </td>
            </tr>

          </tbody>
        </table>
        <table className="table">
          <tbody>
            <tr style={{ width: "80%" }}>

              <td width="30%"><a href="https://www.atariarchives.org/deli/" target="_top"
              ><img src="images/digital_deli_01.png" className="img-fluid" alt="Book Icon" /></a></td>
              <td width="70%">
                <p className="article-text" style={{ fontWeight: "800" }} ><a className="article-text" style={{ fontWeight: "800" }}
                  href="https://www.atariarchives.org/deli/" target="_blank">
                  Digital Deli</a></p>
                <p className="article-text" style={{ fontWeight: "400" }}><a href="https://www.atariarchives.org/deli/"
                  target="_top"><i className="fas fa-chevron-circle-right"
                    style={{ fontSize: "1.4 rem", color: "orange" }}></i></a>&nbsp;&nbsp;<a
                      href="https://www.atariarchives.org/deli/" target="_top">The comprehensive, user-lovable menu of
                    computer lore, lifestyles and fancy.</a>
                </p>
                <p>Workman Publishing New York,
                  Copyright © 1984 by Steve Ditlea</p>

                <p>The Conservative Computer
                  © 1984 Wm. F. Buckley, Jr.</p>

                <p>It Didn&apos;t Come From Outer Space
                  © 1984 William Tenn.</p>

                <p>A now-classic compendium of emergent digital culture, at its beginnings in 1984.

                  “Digital Deli” was created by 140 writers and artists. What a breadth of topics: digital history,
                  hardware hackers, young software moguls, electric words, buzzy arts, micro music, binary brains, money
                  and finance, kids, games, predictions back then!
                </p>
                <p>Soon out of print, the book survived online due to diligent efforts by K. Savetz and the crew at
                  atariarchives.org who digitized it--hosting since 2008. Our free links go there. (Thanks, K.!) Start
                  with a good look at the MENU. Then try some of our more future-forward suggestions below.
                </p>

              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  </section >
);

// const DeliArticleList = () => (
//   <ul className="article-list">
//   <li><b><a href="https://www.atariarchives.org/deli/" target="_top"><i
//     className="fas fa-chevron-circle-right"
//     style={{ fontSize: "1.2 rem", color: "orange" }}></i></a>&nbsp;&nbsp;<a
//       href="https://www.atariarchives.org/deli/" target="_top">MENU</a></b></li>


//   <li>

//     <a href="https://www.atariarchives.org/deli/homebrew_and_how_the_apple.php" target="_top">
//       <i className="fas fa-chevron-circle-right" style={{ fontSize: "1.2 rem", color: "orange" }}></i></a>
//       &nbsp;
//       <a href="https://www.atariarchives.org/deli/homebrew_and_how_the_apple.php" target="_top">
//       <b>HOMEBREW AND HOW THE APPLE CAME TO BE </b>by Stephen Wozniak
//       </a><br />
//     The “Deli’s” most linked-to content, in which Steve Jobs’ tech partner explained their origins.</li>


//   <li><b><a href="https://www.atariarchives.org/deli/personal_freedom.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style={{ fontSize: "1.2 rem", color: "orange" }}></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/personal_freedom.php" target="_top">PERSONAL COMPUTERS
//       / PERSONAL FREEDOM</b> by Timothy Leary</a><br>
//     The multi-media professor of psych and sentience waxed wise, ending with Talking Heads.</li>


//   <li><b><a href="https://www.atariarchives.org/deli/conservative.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/conservative.php" target="_top">THE CONSERVATIVE
//       COMPUTER</b> by Wm, F. Buckley, Jr.</a><br>
//     Editor of National Review Bill, the voice of the Smart Right, archly skewered Luddites in his midst.
//   </li>


//   <li><b><a href="https://www.atariarchives.org/deli/computopia.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/computopia.php" target="_top">COMPUTOPIA NOW!</b> by
//     Ted Nelson</a><br>
//     Polymath and enfant terrible, this son of Hollywood royalty predicted the Web.</li>


//   <li><b><a href="https://www.atariarchives.org/deli/cable.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/cable.php" target="_top">COMPUTERS, CABLE AND THE
//       FUTURE</b> by John Gabree</a><br>
//     A journalist, organizer and activist predicted streaming video and everyday invasion of privacy.
//   </li>


//   <li><b><a href="https://www.atariarchives.org/deli/soft.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/soft.php" target="_top">ON SOFTER SOFTWARE</b> by Bill
//     Gates</a><br>
//     Scroll down: Pre-Web, the Chairman of Microsoft, Inc. intuited cookies, tracking and AI aps.</li>


//   <li><b><a href="https://www.atariarchives.org/deli/times_goes_computer.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/times_goes_computer.php" target="_top">THE TIMES GOES
//       COMPUTER</b> by Carla Marie Rupp</a><br>
//     A transition in NYC journalism, by a KU grad & sole inputter of every word in “Digital Deli”.</li>


//   <li><b><a href="https://www.atariarchives.org/deli/40_year_old.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/40_year_old.php" target="_top">THE FORTY-YEAR-OLD
//       HIPPIE BRINGS THE COMPUTER AGE HOME</b> by Ted Richards</a><br>
//     Transitioning from the We Age to the dig-it-all Me Age, an Underground Comix icon matures.</li>

//   <li><b><a href="https://www.atariarchives.org/deli/part2_forty.php" target="_top"><i
//     className="fas fa-chevron-circle-right" style="font-size: 1.2rem; color: orange;"></i></a>&nbsp;<a
//       href="https://www.atariarchives.org/deli/part2_forty.php" target="_top">THE FORTY-YEAR-OLD
//       HIPPIE AND THE CRUNCHY COMPTER</b> by Ted Richards</a>
//   Semi-autobiographical: Ted was marketing czar for Atari. Now the designer of this Web site!</li>

// </ul>
// )

const Books_OLD = () => (
  <section className="page-section portfolio" id="books" style={{ marginTop: "-3rem" }}>
    <div className="container">
      <Divider iconClass="fa fa-book" title="Books" />
      <div className="container">
        <table className="table">
          <tbody>
            <tr style={{ width: "80%" }}>

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
                <p className="article-text" style={{ fontWeight: 800 }}>
                  <a
                    className="article-text"
                    style={{ fontWeight: 800 }}
                    href="https://www.atariarchives.org/deli/"
                    target="_blank"
                  >
                    The Story Behind the Digital Deli
                  </a>
                </p>
                <p className="article-text" style={{ fontWeight: 400 }}>
                  How did this now-classic collection of original works capturing the computer culture in its early days (1984) come about?
                </p>
                <p style={{ fontWeight: 200 }}></p>
                <p className="article-text" style={{ fontWeight: 400 }}>The Introduction tells it all: just click here... </p>
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

export default Books; 