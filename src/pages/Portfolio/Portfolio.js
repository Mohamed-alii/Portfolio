import React , { useContext } from "react";
import "./Portfolio.scss";
import HeaderShadow from "../../components/HeaderShadow/HeaderShadow";
import BubbleBgCard from "../../components/BubbleBgCard/BubbleBgCard";
import developerImg from "../../assets/developer.png";
import ColorsContext from "../../store/colors-store";

const Portfolio = () => {

  const colorContext = useContext(ColorsContext);
  
  return (
    <section className="portfolio m-b-5">
      <HeaderShadow headerTitle="Portfolio" />

      <div className="portfolio-content">

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
             githubUrl="https://github.com/Mohamed-alii/Moviez" 
             liveUrl="https://moviez-psi.vercel.app/Home">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Moviez</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  Website that displays movies and Tv series and thier news.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">css 3</span>
                <span className="portfolio-content__card-content__skill">React</span>
                <span className="portfolio-content__card-content__skill">Redux</span>
                <span className="portfolio-content__card-content__skill">Redux saga</span>
                <span className="portfolio-content__card-content__skill">Firebase</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color}
              githubUrl="https://github.com/Mohamed-alii/Gpt3" 
              liveUrl="https://gpt3-two.vercel.app/">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Gpt</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  Responsive landing page.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">css 3</span>
                <span className="portfolio-content__card-content__skill">React</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/Tic-Tac-Toe" 
              liveUrl="https://tic-tac-toe-ten-zeta.vercel.app/">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Tic Tac Toe</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                Tic Tac Toe game.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML</span>
                <span className="portfolio-content__card-content__skill">css</span>
                <span className="portfolio-content__card-content__skill">React</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/MemoryGame" 
              liveUrl="https://memorygame-nu.vercel.app/">        
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Memory Game</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
              Memory Game , Flip the cards and match the pictures.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">css 3</span>
                <span className="portfolio-content__card-content__skill">React</span>
                <span className="portfolio-content__card-content__skill">Styled components</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/Calculator" 
              liveUrl="https://calculator-two-orpin.vercel.app">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Calculator</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  Simple calculator application.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">css 3</span>
                <span className="portfolio-content__card-content__skill">React</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/MOGO-" 
              liveUrl="https://mohamed-alii.github.io/MOGO-/">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">MOGO</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  Responsive landing page.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">scss</span>
                <span className="portfolio-content__card-content__skill">Bootstrap</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/Colorlib" 
              liveUrl="https://mohamed-alii.github.io/Colorlib/">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">Color lib</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  Responsive landing page.
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML 5</span>
                <span className="portfolio-content__card-content__skill">css 3</span>
              </div>
            </div>
          </BubbleBgCard>

          <BubbleBgCard bgColor={colorContext.currentColor.color} 
              githubUrl="https://github.com/Mohamed-alii/CRUD" 
              liveUrl="https://mohamed-alii.github.io/CRUD/">
            <div className="portfolio-content__card-content">
              <h2 className="m-t-1 m-b-1 bubble-card__header">CRUD</h2>
              <p className="text-left pl-1 pr-1 m-b-1 min-height-3">
                  CRUD operations application
              </p>
              <div className="portfolio-content__card-content__skills m-b-1 pl-1">
                <span className="portfolio-content__card-content__skill">HTML</span>
                <span className="portfolio-content__card-content__skill">javascript</span>
                <span className="portfolio-content__card-content__skill">DOM</span>
              </div>
            </div>
          </BubbleBgCard>

      </div>

    </section>
  );
};

export default Portfolio;
