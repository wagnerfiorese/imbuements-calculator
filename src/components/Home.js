import React, { useState } from 'react';
import Vampirism from './Vampirism';
import Void from './Void';
import Strike from './Strike';
import Featherweight from './Featherweight';
import Swiftness from './Swiftness';
import Vibrancy from './Vibrancy';
import Snakeskin from './Snakeskin';
import Quarascale from './Quarascale';
import Lichshroud from './Lichshroud';
import Dragonhide from './Dragonhide';
import Demonpresence from './Demonpresence';
import Cloudfabric from './Cloudfabric';
import Scorch from './Scorch';
import Frost from './Frost';
import Venom from './Venom';
import Electrify from './Electrify';
import Reap from './Reap';
import Slash from './Slash';
import Precision from './Precision';
import Epiphany from './Epiphany';
import Chop from './Chop';
import Blockade from './Blockade';
import Bash from './Bash';
import VampirismIcon from '../images/vampirism.gif';
import VoidIcon from '../images/void.gif';
import StrikeIcon from '../images/strike.gif';
import FeatherweightIcon from '../images/featherweight.gif';
import SwiftnessIcon from '../images/swiftness.gif';
import VibrancyIcon from '../images/vibrancy.gif';
import SnakeSkinIcon from '../images/snake-skin-imbue.gif';
import QuaraScaleIcon from '../images/quara-scale.gif';
import LichShroudIcon from '../images/lich-shroud.gif';
import DragonHideIcon from '../images/dragon-hide.gif';
import DemonPresenceIcon from '../images/demon-presence.gif';
import CloudFabricIcon from '../images/cloud-fabric.gif';
import ScorchIcon from '../images/scorch.gif';
import FrostIcon from '../images/frost.gif';
import VenomIcon from '../images/venom.gif';
import ElectrifyIcon from '../images/electrify.gif';
import ReapIcon from '../images/reap.gif';
import SlashIcon from '../images/slash.gif';
import PrecisionIcon from '../images/precision.gif';
import EpiphanyIcon from '../images/epiphany.gif';
import ChopIcon from '../images/chop.gif';
import BlockadeIcon from '../images/blockade.gif';
import BashIcon from '../images/bash.gif';
import SkillBoost from '../images/skill-boost.gif';
import Support from '../images/support.gif';
import ElementalDamage from '../images/elemental-damage.gif';
import ElementalProtection from '../images/elemental-protection.gif';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <div className="index-buttons">
        {/* Botões de seção */}
        <button
          onClick={() => setCurrentSection('SkillBoost')}
          className="skill-boost-button"
        >
          <img
            src={SkillBoost}
            alt="Skill Boost"
            style={{ verticalAlign: 'middle' }}
          />
          <p className="skill-boost-text">Skill Boost</p>
        </button>
        <button onClick={() => setCurrentSection('ElementalDamage')}>
          <img
            src={ElementalDamage}
            alt="Elemental Damage"
            style={{ verticalAlign: 'middle' }}
          />
          Elemental Damage
        </button>
        <button onClick={() => setCurrentSection('ElementalProtection')}>
          <img
            src={ElementalProtection}
            alt="Elemental Protection"
            style={{ verticalAlign: 'middle' }}
          />
          Elemental Protection
        </button>
        <button onClick={() => setCurrentSection('Support')}>
          <img
            src={Support}
            alt="Support"
            style={{ verticalAlign: 'middle' }}
          />
          Support
        </button>
      </div>
      <div>
        <h1 className="title">Imbuement Calculator</h1>
        {currentSection === 'Support' && (
          <ul className="horizontal-links">
            <li>
              <button onClick={() => handleButtonClick('Vampirism')}>
                <img
                  src={VampirismIcon}
                  alt="Vampirism"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="vampirism-index">Vampirism</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Void')}>
                <img
                  src={VoidIcon}
                  alt="Void"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="void-index">Void</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Strike')}>
                <img
                  src={StrikeIcon}
                  alt="Strike"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="strike-index">Strike</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Featherweight')}>
                <img
                  src={FeatherweightIcon}
                  alt="Feathweweight"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="featherweight-index">Featherweight</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Swiftness')}>
                <img
                  src={SwiftnessIcon}
                  alt="Swiftness"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="swiftness-index">Swiftness</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Vibrancy')}>
                <img
                  src={VibrancyIcon}
                  alt="Vibrancy"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="vibrancy-index">Vibrancy</p>
              </button>
            </li>
          </ul>
        )}
        {currentSection === 'ElementalProtection' && (
          <ul className="horizontal-links">
            <li>
              <button onClick={() => handleButtonClick('SnakeSkin')}>
                <img
                  src={SnakeSkinIcon}
                  alt="Snake Skin"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="snakeskin-index">Snake Skin</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('QuaraScale')}>
                <img
                  src={QuaraScaleIcon}
                  alt="Quara Scale"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="quarascale-index">Quara Scale</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('LichShroud')}>
                <img
                  src={LichShroudIcon}
                  alt="Lich Shroud"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="lichshroud-index">Lich Shroud</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('DragonHide')}>
                <img
                  src={DragonHideIcon}
                  alt="Dragon Hide"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="dragonhide-index">Dragon Hide</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('DemonPresence')}>
                <img
                  src={DemonPresenceIcon}
                  alt="Demon Presence"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="demonpresence-index">Demon Presence</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('CloudFabric')}>
                <img
                  src={CloudFabricIcon}
                  alt="Cloud Fabric"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="cloudfabric-index">Cloud Fabric</p>
              </button>
            </li>
          </ul>
        )}
        {currentSection === 'ElementalDamage' && (
          <ul className="horizontal-links">
            <li>
              <button onClick={() => handleButtonClick('Scorch')}>
                <img
                  src={ScorchIcon}
                  alt="Scorch"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="scorch-index">Scorch</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Frost')}>
                <img
                  src={FrostIcon}
                  alt="Frost"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="frost-index">Frost</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Venom')}>
                <img
                  src={VenomIcon}
                  alt="Venom"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="venom-index">Venom</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Electrify')}>
                <img
                  src={ElectrifyIcon}
                  alt="Electrify"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="electrify-index">Electrify</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Reap')}>
                <img
                  src={ReapIcon}
                  alt="Reap"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="reap-index">Reap</p>
              </button>
            </li>
          </ul>
        )}
        {currentSection === 'SkillBoost' && (
          <ul className="horizontal-links">
            <li>
              <button onClick={() => handleButtonClick('Slash')}>
                <img
                  src={SlashIcon}
                  alt="Slash"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="slash-index">Slash</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Precision')}>
                <img
                  src={PrecisionIcon}
                  alt="Precision"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="precision-index">Precision</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Epiphany')}>
                <img
                  src={EpiphanyIcon}
                  alt="Epiphany"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="epiphany-index">Epiphany</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Chop')}>
                <img
                  src={ChopIcon}
                  alt="Chop"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="chop-index">Chop</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Blockade')}>
                <img
                  src={BlockadeIcon}
                  alt="Blockade"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="blockade-index">Blockade</p>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('Bash')}>
                <img
                  src={BashIcon}
                  alt="Bash"
                  style={{ verticalAlign: 'middle' }}
                />
                <br />
                <p className="bash-index">Bash</p>
              </button>
            </li>
          </ul>
        )}
      </div>
      {currentComponent === 'Vampirism' && <Vampirism />}
      {currentComponent === 'Void' && <Void />}
      {currentComponent === 'Strike' && <Strike />}
      {currentComponent === 'Featherweight' && <Featherweight />}
      {currentComponent === 'Swiftness' && <Swiftness />}
      {currentComponent === 'Vibrancy' && <Vibrancy />}
      {currentComponent === 'SnakeSkin' && <Snakeskin />}
      {currentComponent === 'QuaraScale' && <Quarascale />}
      {currentComponent === 'LichShroud' && <Lichshroud />}
      {currentComponent === 'DragonHide' && <Dragonhide />}
      {currentComponent === 'DemonPresence' && <Demonpresence />}
      {currentComponent === 'CloudFabric' && <Cloudfabric />}
      {currentComponent === 'Scorch' && <Scorch />}
      {currentComponent === 'Frost' && <Frost />}
      {currentComponent === 'Venom' && <Venom />}
      {currentComponent === 'Electrify' && <Electrify />}
      {currentComponent === 'Reap' && <Reap />}
      {currentComponent === 'Slash' && <Slash />}
      {currentComponent === 'Precision' && <Precision />}
      {currentComponent === 'Epiphany' && <Epiphany />}
      {currentComponent === 'Chop' && <Chop />}
      {currentComponent === 'Blockade' && <Blockade />}
      {currentComponent === 'Bash' && <Bash />}
    </div>
  );
};

export default Home;
