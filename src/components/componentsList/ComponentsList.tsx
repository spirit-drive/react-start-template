import React, { useState } from "react";
import { FC } from "react";
import { Layout } from "../lauout/Layout";
import { PreviewItems } from "../PreviewItems/PreviewItems";
import { Portal } from "../ui/Portal/Portal";
import cn from "classnames";
import cl from './ComponentsList.module.scss'
import { Button } from "../button/Button";
import { createRandomOperation} from "./functions";

const operations = [
    {
        operationId: '01',
        total: '100500',
        category: 'мизерные траты',
        name: 'First operation',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
        createdAt: '20-10-2020',
    },
    {
        operationId: '02',
        total: '100501',
        category: 'траты',
        name: 'SecondOperation',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
        createdAt: '20-10-2020',
    },
    {
        operationId: '03',
        total: '100503',
        category: 'Болшьшие траты',
        name: 'third operation',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
        createdAt: '20-10-2020',
    },
    {
        operationId: '04',
        total: '100504',
        category: 'Очень большие траты',
        name: 'lastOperation',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
        createdAt: '20-10-2020',
    }
];
export const ComponentsList = () => {

    // const [popup, setPopup] = useState(false)
    const [catalog, setCatalog] = useState(operations)
    function generateOperation() {
        let date = new Date()
        // console.log(new Date().getTime())
        console.log(createRandomOperation(date))
        let newItem = createRandomOperation(date)
        console.log('=====')
        console.log('newItem')
        console.log(newItem)
        console.log('=====')
        console.log('catalog')
        console.log(operations)
        console.log('=====')
        console.log("catalog push")
        operations.push(createRandomOperation(date))
        console.log(operations)
        setCatalog(operations)

    }

    return (
        <>
            <Layout>
                <div className={cn(cl.operations_wrapper)}>
                {catalog.map((catalog) => (
                    <div className={cn(cl.item_wrapper)} key={catalog.operationId}>
                            <span className={cn(cl.name)}> имя операции : {catalog.name}</span>
                        <span>Дата операции : {catalog.createdAt}</span>
                        <span>Категория : { catalog.category}</span>
                        {catalog.total ?<>
                            <span> Сумма операции : {catalog.total}</span>
                            <button datatype={catalog.operationId}>showMore</button>
                            </>
                            : <span>сгенерированная операция</span>}
                    </div>
                ))}
                </div>
                <div className={cn(cl.buttons)}>
                    <Button
                        onClick={ ()=>generateOperation()}
                        itemClass={cl.showMore}
                    >
                        Добавить произвольную операцию
                    </Button>
                    <Button
                    // onClick={ }
                    itemClass={cl.showMore2}
                >
                    Добавить операцию
                </Button>
                </div>

            </Layout>
            {/* <Portal
                visible={popup}
            >asdaa</Portal> */}
        </>
    )
}