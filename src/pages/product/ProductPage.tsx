import React, { FC, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

import LongProduct from "src/shared/long-product/long-product"
import { Product } from "src/models/product/product"
import { useDispatch } from "react-redux"
import { basketActions } from "src/store/basket"
import './ProductPage.css'
import { Button } from "antd"
import { useRtkGetProductsMutation } from "src/services/ProductService/ProductService"
import { useAuth } from "src/context/auth-provider/AuthProvider"


// const PRODUCT_LIST_COUNT = 20
const LIST_GROW_COUNT = 10

// Список товаров
let products = new Map<string, Product>()
let page = 1

const ProductPage: FC = () => {
  const { isAdmin } = useAuth()
  const containerRef = useRef(null)
  const dispatcher = useDispatch()
  const [lastItem, setLastItem] = useState(null)
  const [product, setProduct] = useState([])
  const navigator = useNavigate()
  const [getProducts] = useRtkGetProductsMutation()

  // Загружаем следующую страницу продуктов
  const loadNextProduct = () => {
    getProducts(
      {
        pagination: {
          pageSize: LIST_GROW_COUNT,
          pageNumber: page
        },
        sorting: {
          type: 'ASC',
          field: 'name'
        }
      }
    )
      .then(x => {
        if (x.data) {
          page++
          x.data.data.forEach(x => products.set(x.id, x))
          setProduct([...products.values()])
        }
      }
      )
  }

  // Сохраняем последний элемент из списка. Этот элемент используется для наблюдения
  const setLastItemHandle = () => {
    const items = containerRef.current.children
    const item = items[items.length - 1]
    setLastItem(item)
  }

  // Если последний элемент становится видимым, загружаем элементы в список
  const intersectionCallback = (entries: any) => {
    if (entries[0].isIntersecting) {
      loadNextProduct()
    }
  }

  // Создаем наблюдателя
  const observer = useRef(new IntersectionObserver(intersectionCallback))

  // Первая загрузка компонента
  useEffect(() => {
    if (!products.size)
      loadNextProduct()
    else
      setProduct([...products.values()])
  }, [])

  // При изменении списка запоминаем последнюю позицию
  useEffect(() => {
    setLastItemHandle()
  }, [product])

  // Устанавливаем наблюдатель за последней позицией
  useEffect(() => {
    observer.current.disconnect()

    if (lastItem) {
      observer.current.observe(lastItem)
    }

    return () => {
      if (lastItem) {
        observer.current.unobserve(lastItem)
      }
    }
  }, [lastItem])

  // добавляем товар в корзину
  const handleAddToBasket = (product: Product) => {
    dispatcher(basketActions.add(product))
  }

  // редактируем товар
  const handleEditProduct = (product: Product) => {
    navigator(`/edit/${product?.id}`)
  }

  // новый товар
  const handleAddProduct = () => {
    navigator('/add')
  }

  return (
    <div>
      <div className='scrollBox' ref={containerRef}>
        {product.length > 0 &&
          product.map(x => (
            <LongProduct
              key={x.id}
              product={x}
              onAddToBasket={handleAddToBasket}
              onEditProduct={() => handleEditProduct(x)}
            />
          ))
        }
      </div>

      {isAdmin() &&
        <Button type="primary" onClick={() => handleAddProduct()}>Новый товар</Button>
      }
    </div>
  )
}

export default ProductPage