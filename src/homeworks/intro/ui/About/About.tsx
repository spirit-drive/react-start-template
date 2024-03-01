import React from 'react';
import goals from '../../assets/icons/goals.svg';
import rocket from '../../assets/icons/rocket.svg';
import badge from '../../assets/icons/badge.svg';
import { AboutHeader } from '../AboutHeader';
import { AboutDetails } from '../AboutDetails';
import { AboutFooter } from '../AboutFooter';
import { AboutList } from '../AboutList';
import s from './About.modules.css';

export const About = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <AboutHeader />
        <main className={s.content}>
          <AboutList title="Цели, которых хочу достичь" icon={goals}>
            <li>Научиться разрабатывать сложные веб-приложения, следуя Best Practice</li>
            <li>Получить опыт работы в команде профессиональных разработчиков</li>
            <li>Уверенно проходить собеседования и быстро включаться в новые проекты</li>
            <li>Найти интересную работу в IT-компании</li>
          </AboutList>
          <AboutList title="Технологии и навыки, которыми хочу овладеть" icon={rocket}>
            <li>React, Redux и окружение</li>
            <li>TypeScript</li>
            <li>GraphQL, Apollo, Relay</li>
            <li>Jest, React Testing Library, Cypress</li>
            <li>Websockets, Webworkers</li>
            <li>Webpack, Webpack Module Federation, Babel</li>
            <li>Node.js, Express</li>
            <li>CI/CD, Doker, Kubernetes</li>
            <li>Паттерны, лучшие практики</li>
            <li>Авторизация/Аутентификация, протоколы, безопасность</li>
            <li>Микросервисы и много чего еще</li>
          </AboutList>
          <AboutList title="Технологии, которыми уже владею" icon={badge}>
            <li>
              <h4>Уверенно (+/-)</h4>
              <ul>
                <li>HTML, CSS/SCSS, CSS Modules, Styled Components, БЭМ</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </li>
            <li>
              <h4>Неуверенно</h4>
              <ul>
                <li>TypeScript</li>
                <li>React, Next.js</li>
                <li>Redux, Redux Toolkit, RTL Query, Formik (валидация Yup/Zod)</li>
                <li>Feature-Sliced Design</li>
                <li>Storybook, i18next</li>
                <li>Cypress, Jest, RTL</li>
                <li>Webpack, Babel, ESLint и т.д. - могу сделать простую сборку, но по гайдам</li>
                <li>Git — знаю минимальный набор команд</li>
              </ul>
            </li>
          </AboutList>
          <AboutDetails />
        </main>
        <AboutFooter />
      </div>
    </div>
  );
};
