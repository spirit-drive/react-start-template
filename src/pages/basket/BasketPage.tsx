import { Alert, Button } from "antd"
import React, { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { BasketProductType, GetBasketFromProduct } from "src/models/basket-product"
import { OrderAddModel } from "src/models/order/addOrder"
import { ResponseError } from "src/models/response/responseError"
import { useRtkCreateOrderMutation } from "src/services/OrderService/OrderService"
import BasketProduct from "src/shared/basket-product/basket-product"
import { basketActions, basketSelectors } from "src/store/basket"
import { getError } from "src/utils/getError"



const BasketPage: FC = () => {
  const basket = useSelector(basketSelectors.get)
  const dispatcher = useDispatch()
  const [prodInBasket, setProdInBasket] = useState<BasketProductType[]>([])
  const navigator = useNavigate()
  const [createOrder, response] = useRtkCreateOrderMutation()


  useEffect(() => {
    if (basket === null) {
      return
    }
    setProdInBasket(GetBasketFromProduct(basket))
  }, [basket])

  // удаляем товар из корзины
  const handleRemoveItem = (id: BasketProductType["id"]) => {
    dispatcher(basketActions.remove(id))
  }

  // создаем новый заказ
  const handleCreateOrder = () => {

    const order: OrderAddModel = {
      products: prodInBasket.map(x => { return { id: x.id, quantity: 1 } })
    }

    createOrder(order)
      .unwrap()
      .then(() => {
        navigator("/order")
      })
      .catch(x => {

      })
  }

  return (
    <div>
      {(prodInBasket.length == 0) ?
        <div>Корзина пуста</div> :
        <div>
          <div className='scrollBox'>
            {prodInBasket.map(x => (
              <BasketProduct
                key={x.id}
                id={x.id}
                photo={x.photo}
                name={x.name}
                price={x.price}
                onRemoveItem={handleRemoveItem}
              />
            ))
            }
          </div>
          <Button type="primary" onClick={handleCreateOrder} >Сформировать заказ</Button>
        </div>
      }
      {response.isError &&
        <Alert message={getError(response.error as ResponseError)} type="error" style={{ marginBottom: 20 }} />
      }
    </div>
  )
}

export default BasketPage