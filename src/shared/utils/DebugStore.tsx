import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from "src/app/providers/StoreProvider";

const DebugStore: React.FC = () => {
    const storeData = useSelector((state: RootState) => state); // Получаем все данные из store

    console.log('Store Data:', storeData); // Логируем данные

    return (
        <pre>
      {JSON.stringify(storeData, null, 2)} {/* Отображаем данные в формате JSON */}
    </pre>
    );
};

export default DebugStore;
