import Image from 'next/image'
import Footer from './components/footer';
import './page.css';

import questMaker from './../assets/AdventureCardBack.png';
import discordLogo from './../assets/discordLogo.svg';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <main>
      <Header id='top'/>
      <Navbar id='nav'/>
      <div className='page' id='home'>
        <h4 id='about' className='anchor'>About Us</h4>
        <p className='max-w-3xl m-auto'>
          In Fall 2021, three geeks met in a Purdue University dorm laundry room.
          Two years of weekly board game nights and over 600 hours of TTRPGs later,
          we decided to go to market with our first fantasy-themed party game, Quest Maker.
        </p>

        <div className='spacer'/>

        <h4 id='qm' className='anchor'>Quest Maker</h4>
        <Image src={questMaker} alt='Quest Maker Adventure Card back' className='w-56 h-full m-auto my-4'/>
        <div className='max-w-3xl flex flex-col m-auto'>
          <p>
            Quest Maker is the ultimate card-based adventure of tactics, teamwork, and trickery for 4-6
            players. Dispatch heroes and items on legendary Quests and play event cards to sabotage your
            friends or stack the odds in your favor. Embrace the chaos, the laughter, and the power to
            shape your destiny.
          </p>
          <br/>
          <p>
            The original mastermind behind Quest Maker, Doug, created the game as a Valentine's Day gift
            for his board-game-obsessed girlfriend, Claire. Friends loved the funny cards and simple yet
            strategic gameplay, which motivated us to take it public. As scrappy college students, we had
            to make our mock-ups with common household items. The early versions even featured semi-translucent
            cards, which, for a game based around betrayal and sneakiness, was… less than ideal. However,
            we underwent fast iterations and conducted several rounds of playtesting to rework everything
            from card flow and endgame to accessible fonts and styles.
          </p>
          <br/>
          <p>
            We refuse to use any AI-generated content, as we feel it robs our players of the creativity and
            human spirit that is so integral to the gaming community. Barring manufacturing, we three musketeers
            have done everything ourselves–game design, artwork, PR and advertising, website creation, and the
            countless hours of research to enable it. With Jeneva as the art director, the rest of us mooks even
            learned how to draw (kind of).
          </p>
        </div>

        <div className='spacer'/>

        <h4 className='anchor' id='progress'>Current Stage</h4>
        <div className='max-w-3xl m-auto'>
          <p>
            We are currently in the process of creating card art. Once we have about 2/3 of the cards done, we
            will contact the manufacturer to get a quote and set a Kickstarter launch date. In the meantime, we
            are still looking for playtesters to try out the game and give feedback.
          </p>
          <br/>
          <p>
            If you're interested in playtesting, join our Discord server! If you're interestested in tracking 
            our progress and/or being notified about Kickstarter updates, subscribe to our mailing list.
          </p>
        </div>

        <div className='spacer'/>

        <a href='https://discord.gg/WJtN7Wmqu7' target="_blank" rel="noopener noreferrer" id='discord' className='m-auto flex flex-col items-center max-w-xl'>
          <h4 id="mc_embed_signup_headline">
              Join our Discord
            </h4>
            <p>
              Join our Discord for more frequent updates, playtesting opportunities, and to chat with fellow nerds
              and the Construct Games team!
            </p>
          <Image src={discordLogo} alt='Discord logo' id='discordLogo' width={150} height={150}/>
          <div id='joinDiscord'>Join our Discord!</div>
        </a>

        <div className='spacer'/>

        <form
          action="https://github.us14.list-manage.com/subscribe/post?u=fcc0cd29ae44372a0942113e4&id=7c99510ed9&f_id=00d9c2e1f0"
          method="post"
          id="sub"
          name="mc-embedded-subscribe-form"
          className="validate max-w-xl m-auto anchor"
          target="_self"
          noValidate=""
        >
          <h4 id="mc_embed_signup_headline">
            Subscribe!
          </h4>
          <p>
            Join our mailing list to stay up to date with progress and get
            notifications for our Kickstarter launch date!
          </p>

          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required=""
              defaultValue=""
            />
          </div>

          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>

          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_fcc0cd29ae44372a0942113e4_7c99510ed9"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            defaultValue="Subscribe"
          />
        </form>

        <div className='spacer'/>

        <Footer />
      </div>
    </main>
  );
}
