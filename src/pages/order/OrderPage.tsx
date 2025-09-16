import { Button, Card, Table } from "antd"
import React, { FC, useEffect, useState } from "react"
import { OrderResponse } from "src/models/order/orderResponse"
import { useRtkDeleteProductMutation, useRtkGetOrdersMutation } from "src/services/OrderService/OrderService"
import './OrderPage.css'

// Описание колонок в таблице товаров для заказа
const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Кол-во',
        dataIndex: 'quantity',
        key: 'quantity',
    },
];


const OrderPage: FC = () => {
    const [getOrders, response] = useRtkGetOrdersMutation()
    const [deleteOrder] = useRtkDeleteProductMutation()
    const [orders, setOrders] = useState<OrderResponse>(null)

    // Загружаем заказы
    const loadOrders = () => {
        getOrders(
            {
                pagination: {
                    pageSize: 100,
                    pageNumber: 1
                },
                sorting: {
                    type: 'ASC',
                    field: 'name'
                }
            }
        )
            .then(x => setOrders(x.data ?? null))
    }

    // Первая загрузка компонента
    useEffect(() => {
        loadOrders()
    }, [])

    const handleCancelOrder = (id: string) => {
        deleteOrder(id)
            .unwrap()
            .then(_ => loadOrders())
            .catch()
    }

    return (
        <>
            {((orders === null) || (orders.data.length === 0)) ?
                <div>Нет заказов</div> :
                <div className="orders">
                    {
                        orders.data.map(x => (
                            <Card
                                title={`Заказ ${x.createdAt}`}
                                key={x.id}
                                extra={
                                    <Button color="primary" variant="outlined" size="small"
                                        onClick={() => handleCancelOrder(x.id)}>
                                        Отменить
                                    </Button>}
                            >
                                <Table
                                    dataSource={x.products.map(x => {
                                        return {
                                            key: x._id,
                                            name: x.product.name,
                                            price: x.product.price,
                                            quantity: x.quantity
                                        }
                                    })}
                                    columns={columns}
                                    pagination={false}
                                />
                            </Card>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default OrderPage