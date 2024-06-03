//デザインファイル
import './App.css';
import './App-mobile.css';
import './App-tablet.css';
import './App-laptop.css';


//写真のインポート
import home from './img/home.jpg'
import face from './img/face.jpg'
import ritsumeikan from './img/ritumeilogo .png'
import research1 from './img/research1.jpg'
import research2 from './img/research2.jpg'
//swiper
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function App() {
  return (
    <body>
      <header class="header">

        <div class="header-logo">
          <img class="header-logo-img" src={ritsumeikan} alt="logo" />
          <span class="header-logo-title"> KenjiMatsumoto</span>
        </div>

        <nav class="header-nav">
          <ul class="header-nav-menu">
            <li class="header-nav-item"><a href="#home">HOME</a></li>
            <li class="header-nav-item"><a href="#aboutMe">ABOUT</a></li>
            <li class="header-nav-item"><a href="#research">RESEARCH</a></li>
            <li class="header-nav-item"><a href="#skill">SKILL</a></li>
            <li class="header-nav-item"><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" class="main">

        <section class="main-hero">
          <div class="main-hero-highlight">
            <h1><strong>KENJI MATSUMOTO</strong></h1>

            <a>立命館大学 情報理工学部 社会知能研究室 M1</a>

            <figure class="main-hero-img">
              <img src={face} alt="profile" class="main-hero-img-photo" />
            </figure> {/*figure は図表であることを伝えている*/}
          </div>
        </section>

        <section id="aboutMe" class="main-about-tablet">
          <h2><i class="fa-solid fa-user"></i>About Me</h2>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>

              <div class="container">
                <div class="main-about-description">
                  <h1>Profile </h1>
                  <div class="square"></div>
                  <h2>Thank you for visiting, I'm Kenji!</h2>

                  <div class="main-about-addition-follow">
                    <ul class="social-links">
                      <li>
                        <a href="https://github.com/kenjimatsumoto2001" target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="https://twitter.com/mk2_mk262771871" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li> */}
                      <li>
                        <a href="https://instagram.com/luke_m_kenji?igshid=YmMyMTA2M2Y=" target="_blank">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/mk2_mk262771871" target="_blank">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>

                  </div>

                  <div class="main-about-description-p">
                    <p>香港出身。 香港高校から日本に来て勉強しています。 現在は立命館大学院 情報理工学研究科で複数のWebサービスを使用して新たなサービスを開発する「マッシュアップサービス」について研究しています。</p>
                    <p>また, 今年は基本情報技術者とTOEICを勉強したいと思っているので応援お願いします!</p>
                  </div>
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div class="container">
                <div class="main-about-description">
                  <h1>Education </h1>
                  <div class="square"></div>
                  <h2> Ritsumeikan University (2024 - Current)</h2>
                  <h3>@Graduate School of Information Science and Engineering</h3>

                  <h2> Ritsumeikan University (2020 - 2024)</h2>
                  <h3>@Information Science and Engineering</h3>

                  <h2> Ritsumeikan Keisho High School (2017 - 2020)</h2>

                  <h2> Hong Kong Japanese Junior High School (2016 - 2017)</h2>

                </div>
              </div>


            </SwiperSlide>
            <SwiperSlide>
              <div class="container">
                <div class="main-about-description">
                  <h1>INTERESTS</h1>

                  <div class="square"></div>
                  <div class="intersts-list1">
                    <div class="intersts-list">
                      <div class="circle"><i1 class="fa-solid fa-person-walking"></i1><p>Walking</p></div>
                      <div class="circle"><i1 class="fa-solid fa-dumbbell"></i1><p>Training</p></div>
                    </div>

                    <div class="intersts-list">
                      <div class="circle"><i1 class="fa-sharp fa-solid fa-utensils"></i1><p>Lunch</p></div>
                      <div class="circle"><i1 class="fa-solid fa-headphones"></i1><p>Music</p></div>
                    </div>

                    <div class="intersts-list">
                      <div class="circle"><i1 class="fa-solid fa-film"></i1><p>Movie</p></div>
                      <div class="circle"><i1 class="fa-solid fa-car"></i1><p>Driving</p></div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>


        <section id="research" class="main-works">
          <h2><i class="fa-solid fa-book"></i>Research</h2>
          <div class="container">
            <div class="main-works-item">
              <figure class="main-works-item-img primary">
                <img src={research1} alt="Work A" class="workA" />
              </figure>
              <div class="main-works-item-text">
                <h3>背景</h3>
                <div class="square1"></div>
                <p>現在、多種多様なWebサービスが数多く存在しており、それらを組み合わせてマッシュアップサービスを構築する技術が発達している。しかしながら、Webサービスの利用に関する統計より最大85.6%のWebサービスがマッシュアップサービスに利用されていない。これは、利用可能である膨大なWebサービスの中から真に適切なWebサービスを発見し、組み合わせる事が困難であることを示している。このことから、マッシュアップサービスを構築する際には、膨大な数のWebサービスから効率的に見つけ出す必要がある。</p>
              </div>
            </div>

            <div class="main-works-item">
              <figure class="main-works-item-img secondary">
                <img src={research2} alt="Work B" class="workB" />
              </figure>{/*ここに写真 */}
              <div class="main-works-item-text">
                <h3>サービス依存関係に基づくソフトクラスタリング</h3>
                <div class="square2"></div>
                <p>既存研究では、各Webサービスの仕様書に基づいてWebサービスを特定していた。しかし、この方法では、仕様書がWebサービス提供者の規則に依存するため、同じ機能を持つWebサービスを見つけられない問題がある。また、複数の機能を持つWebサービスを一つの機能として分類する問題もある。そこで、規則に依存しない複合サービスの関係を示すグラフネットワークを作成する。これにより、頻繁に利用されるWebサービスや，頻繁に組み合わせて使われるWebサービスのペアを表現することが可能となる。その後，構築したグラフの特徴を取得することで，Webサービスを複数の機能に分類を行う．</p>
              </div>
            </div>
            <h2><i class="fa-solid fa-book"></i>学会発表</h2>
            <h4>・松本賢司，村上陽平．<a href="https://pub.confit.atlas.jp/ja/event/general2024/presentation/D-23-03">サービス連携関係に基づくソフトクラスタリング</a>，電気情報通信学会 総合大会，2024.</h4>
          </div>
        </section>


        <section id="skill" class="main-about-addition">
          <h2><i class="fa-solid fa-bars"></i>Skill</h2>
          <div class="container">
              <div class="main-about-addition-skills">

              <div class="intersts-list1">
                    <div class="intersts-list">
                      <div class="box"><p>Python</p></div>
                      <div class="box"><p>MYSQL</p></div>
                    </div>

                    <div class="intersts-list">
                      <div class="box"><p>HTML</p></div>
                      <div class="box"><p>CSS</p></div>
                    </div>
                  </div>
              </div>
          </div>

        </section>

        <h2><i class="fa-solid fa-link"></i>Related Link</h2>
        <div class="container">
          <div class="main-about-addition-follow">
            <ul class="social-links">
              <li>
                <a href="https://www.si-lab.org/index-ja.html" target="_blank">
                  <p>・社会知能研究室</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer id="contact" class="footer">
        <div class="footer-container container">
          <div class="footer-from">
            {/* <p>お問い合わせフォームは近日公開します。ご迷惑をおかけします</p> */}
            {/* <form action="action.php" method="post" name="contact-form">
              {/* <div class="footer-form-input">
                <i class="far fa-user"></i>
                <input type="text" placeholder="氏名" />
              </div>

              <div class="footer-form-input">
                <i class="far fa-envelope"></i>
                <input type="e-mail" placeholder="メールアドレス" />
              </div>

              <div class="footer-form-textarea">
                <textarea placeholder="お問い合わせ内容"></textarea>
              </div>
              <input type="submit" value="Submit" class="button-primary" />
            </form> */} 
          </div>

          <div class="footer-info">
            <div class="footer-info-nav">
              <img class="footer-info-nav-image" src={ritsumeikan} alt="logo" />
              <nav class="footer-info-nav-menu">
                <ul>
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#aboutMe">ABOUT</a></li>
                  <li><a href="#research">RESEARCH</a></li>
                  <li><a href="#skill">SKILL</a></li>
                </ul>
              </nav>
            </div>

            <div class="footer-info-follow">
              <ul class="social-links">
                <li>
                  <a href="https://github.com/kenjimatsumoto2001" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.morinaga.co.jp/in/jelly/protein.html" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://instagram.com/luke_m_kenji?igshid=YmMyMTA2M2Y=" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mk2_mk262771871" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-info-copy">
              <small>© 2024 KenjiMatsumoto. All Rights Reserved.</small>
            </div>
          </div>
        </div>

      </footer>

      <script src="swiper.min.js"></script>

      
    </body >
  );
}

export default App;
