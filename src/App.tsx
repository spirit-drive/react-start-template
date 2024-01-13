import { useState } from 'react';
import React from 'react';
import './App.css';
import { Layout } from './components/lauout/Layout';
import { PopupWrapper } from './components/PopupWrapper/PopupWrapper';
import { Header } from './components/header/Header';
import { PreviewItems } from './components/PreviewItems/PreviewItems';
import { PreviewItem } from './components/PreviewItem/PreviewItem';


function App() {
  const [popupState, setPopupState] = useState(true)
  const operations = [
    {
      'operationId':'01',
      'total': '100500',
      'category': 'мизерные траты',
      'operationName': 'First operation',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      'date':'20-10-2020'
    },
    {
      'operationId':'02',
      'total': '100501',
      'category': 'траты',
      'operationName': 'SecondOperation',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      'date':'20-10-2020'
    },
    {
      'operationId':'03',
      'total': '100503',
      'category': 'Болшьшие траты',
      'operationName': 'third operation',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      'date':'20-10-2020'
    },
    {
      'operationId':'04',
      'total': '100504',
      'category': 'Очень большие траты',
      'operationName': 'lastOperation',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
      'date':'20-10-2020'
    },
  ]
  return (
    <>
    <Header/>
      <Layout>
        <PreviewItems
        elementsData={operations}/>
        <PreviewItem
          elementData={ operations[0]} />
      </Layout>
      <PopupWrapper
      visible={popupState}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, libero.12311
      </PopupWrapper>
    </>

  );
}

export default App;

