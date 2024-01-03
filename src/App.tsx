import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainLayout } from './components/accountingComponents/lauout/MainLayout';
import { PreviewOperation } from './components/accountingComponents/previewOperation/PreviewOperation';
import { DetailsOperation } from './components/accountingComponents/detailsOperation/DetailsOperation';
import { BasketButton } from './components/magazineComponents/BasketButton/BasketButton';

function App() {
  return (
    <MainLayout>
      <div className="previews-operations">
      <PreviewOperation
      operationId={1}
      operationSumm={55511}
      operationCalegory={'1Расходы'}
      operationName={'1хз куда потратил'}
      operationDescription = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab et aliquam culpa, in doloremque odio vero omnis delectus fugit exercitationem, pariatur fugiat maxime neque unde a modi aspernatur sint cum nemo blanditiis. Commodi totam non distinctio vitae quibusdam sint eos perspiciatis vero omnis. Quo itaque velit in rerum id earum.'}
      />
      </div>
      <DetailsOperation
      operationId={1}
      operationSumm={55511}
      operationCalegory={'1Расходы'}
      operationName={'1хз куда потратил'}
      operationDescription = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab et aliquam culpa, in doloremque odio vero omnis delectus fugit exercitationem, pariatur fugiat maxime neque unde a modi aspernatur sint cum nemo blanditiis. Commodi totam non distinctio vitae quibusdam sint eos perspiciatis vero omnis. Quo itaque velit in rerum id earum.'}
      operationDate={'20.12.2024'}
      />
      {/* <BasketButton
      numberOfGoods = {0}/> */}

      
    
    </MainLayout>

  );
}

export default App;

