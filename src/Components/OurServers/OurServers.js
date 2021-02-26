import React from "react";
import TitleLine from "../TitleLine/TitleLine";
import "./OurServers.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import makotoBg from "../../images/HomeBg.webp";
import borneoBg from "../../images/BorneoBg.webp";

export default function OurServers() {
  return (
    <div className="our-servers">
      <TitleLine type="servers">НАШИ СЕРВЕРА</TitleLine>
      <div className="server-cards">
        <div
          className="server-card"
          style={{ backgroundImage: `url(${makotoBg})` }}
        >
          <div className="server-card-flag-makoto">
            <p>SURVIVAL</p>
          </div>
          <div className="server-card-header">
            <div className="server-card-title">
              <div className="server-card-title-text">
                MAKOTO
                <span className="w-350 green-c f-16">1.16.5</span>
              </div>
              <div className="server-card-online">18 ИГРОКОВ ОНЛАЙН</div>
            </div>

            <div className="server-card-game-mode green-c">
              Игровой режим: <span className="w-350 white-c">Выживание</span>
            </div>
          </div>
          <div className="server-card-body">
            <p>
              Здесь Вам предстоит пройти все этапы классического Minecraft - от
              добычи первого дерева вашим неистовым кулаком до свержения
              жестокого дракона из другого измерения, а после насладиться тем,
              чем дополнили игру мы сами.
              <br />
              <br />В достижении заветной цели (какой бы она ни была) - вам
              помогут люди. Общайтесь, развивайтесь в одиночку или вместе с
              другими игроками, торгуйте, объединяйтесь в группы, отстаивая
              общий интерес и наслаждайтесь игровым процессом!
            </p>
          </div>
          <div className="server-card-footer">
            <div className="server-card-link">РУКОВОДСТВО И ПОМОЩЬ</div>
            <CopyToClipboard text="vanilla.makotomc.ru">
              <button className="server-card-ip">VANILLA.MAKOTOMC.RU</button>
            </CopyToClipboard>
          </div>
        </div>

        <div
          className="server-card"
          style={{ backgroundImage: `url(${borneoBg})` }}
        >
          <div className="server-card-flag-borneo">
            <p>CREATIVE</p>
          </div>
          <div className="server-card-header">
            <div className="server-card-title">
              <div className="server-card-title-text">
                BORNEO
                <span className="w-350 purple-c f-16">1.16.5</span>
              </div>
              <div className="server-card-online">18 ИГРОКОВ ОНЛАЙН</div>
            </div>

            <div className="server-card-game-mode purple-c">
              Игровой режим: <span className="w-350 white-c">Творческий</span>
            </div>
          </div>
          <div className="server-card-body">
            <p>
              Это бесконечный простор для вашей фантазии, где все ограничивается
              только кубами. Вы получите свой собственный мир, который вольны
              оформить так, как пожелаете - а благодаря инструментам, которые мы
              внедрили в игру, сможете сделать намного больше, чем обычно.
              <br />
              <br />
              Общайтесь с другими строителями, посещайте их миры, делитесь
              постройками и советами, стройте сами и восхищайте других полетом
              своего воображения!
            </p>
          </div>
          <div className="server-card-footer">
            <div className="server-card-link">РУКОВОДСТВО И ПОМОЩЬ</div>
            <CopyToClipboard text="creative.makotomc.ru">
              <button className="server-card-ip">CREATIVE.MAKOTOMC.RU</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
