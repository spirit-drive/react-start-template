import React, { useState, Suspense } from 'react';
import './App.css';
import { Layout } from './components/lauout/Layout';
import { PopupWrapper } from './components/PopupWrapper/PopupWrapper';
import { Header } from './components/header/Header';
import { PreviewItems } from './components/PreviewItems/PreviewItems';
import { PreviewItem } from './components/PreviewItem/PreviewItem';
import { PopupWithButton } from './components/popupWithButton/PopupWithButton';
import { ThemeProvider } from './components/context/ThemeContext';
import { LanguageConponent } from './components/LanguageConponent/LanguageConponent';
import { LanguageProvider } from './components/context/LanguageContext';
// import { ComponentsList } from './components/componentsList/ComponentsList';
import { ComponentsList } from './components/componentsListWithObserver/ComponentsList';
import { PortalPopup } from './components/portalPopup/portalPopup';
function App() {
  const [popupState, setPopupState] = useState(false);
  const operations = [
    {
      operationId: '01',
      total: '100500',
      category: 'мизерные траты',
      operationName: 'First operation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      date: '20-10-2020',
    },
    {
      operationId: '02',
      total: '100501',
      category: 'траты',
      operationName: 'SecondOperation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      date: '20-10-2020',
    },
    {
      operationId: '03',
      total: '100503',
      category: 'Болшьшие траты',
      operationName: 'third operation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      date: '20-10-2020',
    },
    {
      operationId: '04',
      total: '100504',
      category: 'Очень большие траты',
      operationName: 'lastOperation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      date: '20-10-2020',
    },
  ];

  return (
    <>
      {/* <Suspense fallback="...Loading">
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <Layout>
              <PopupWithButton />
              <PreviewItems elementsData={operations} />
              <LanguageConponent />
              <PreviewItem elementData={operations[0]} />
            </Layout>

            <PopupWrapper visible={popupState}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, libero.12311
            </PopupWrapper>
          </ThemeProvider>
        </LanguageProvider>
      </Suspense> */}
      {/* <ComponentsList/> */}
      {/* <ComponentsList/> */}
      <PortalPopup/>
    </>
  );
}

export default App;
