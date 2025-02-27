/** @decorator */

import { FoundationElement } from '../../lib/foundation-element/foundation-element.js';
import { html } from '../../lib/template.js';
import { css } from '../../lib/element/styles/css.js';
import { notDefined } from '../../lib/utilities/style/display.js';

// TODO
import { settings } from '../../design/leafygreen/icons/settings.js';

export class NotFoundPage extends FoundationElement {}

export const notFoundPageTemplate = (context, definition) => html`
  <template>
    <main>
      <div class="content">
        <img src="static/404.png" alt="Page not found" />
        <div class="details">
          <p class="headline">Что-то пошло не так.</p>
          <p class="text">
            Страница не найдена. Убедитесь, что адрес введён корректно.
          </p>
          <div class="actions">
            <${'ppp-button'} @click="${(x) =>
  (x.app.page = 'cloud-services')}" appearance="primary">
              ${settings({
                slot: 'start'
              })}
              К настройкам облачных сервисов
            </ppp-button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="copyright">
          <p>
            © PPP 2021-текущее время. Приложение PPP разработано командой John
            Pantini.
          </p>
        </div>
      </div>
    </main>
  </template>
`;

export const notFoundPageStyles = (context, definition) =>
  css`
    ${notDefined}

    main {
      margin: calc(25px + 32px) auto 32px auto;
      max-width: 1150px;
      padding: 0 24px;
    }

    .content {
      -webkit-align-items: center;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-flow: row-reverse wrap;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      margin-bottom: 64px;
    }

    img {
      width: 550px;
      max-width: 100%;
      border: 0;
      vertical-align: middle;
    }

    .details {
      padding: 0 16px;
    }

    p {
      color: rgb(6, 22, 33);
      font-size: 16px;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }

    .headline {
      font-size: 32px;
      line-height: 32px;
    }

    .text {
      font-size: 16px;
      line-height: 24px;
      margin-top: 24px;
    }

    .actions {
      margin-top: 24px;
    }

    .footer {
      width: auto;
      font-size: 80%;
      border: none;
      padding: 20px 0;
    }

    .copyright {
      text-align: center;
    }
  `;

export const notFoundPage = NotFoundPage.compose({
  baseName: 'not-found-page',
  template: notFoundPageTemplate,
  styles: notFoundPageStyles
});
