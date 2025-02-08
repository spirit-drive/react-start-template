import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./CartPage";

// Мокируем localStorage
beforeEach(() => {
    Storage.prototype.getItem = jest.fn((key) => {
        if (key === "cart") {
            return JSON.stringify([
                { id: "1", photo: "img1.jpg", desc: "Товар 1", price: 100 },
                { id: "2", photo: "img2.jpg", desc: "Товар 2", price: 200 },
            ]);
        }
        return null;
    });

    Storage.prototype.setItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
});

describe("Cart component", () => {
    test("Отображение товаров в корзине", () => {
        render(<Cart />);

        expect(screen.getByText("Товар 1")).toBeInTheDocument();
        expect(screen.getByText("Товар 2")).toBeInTheDocument();
        expect(screen.getByText("Цена всего: 300₽")).toBeInTheDocument();
    });

    test("Удаление товара из корзины", () => {
        render(<Cart />);

        const removeButtons = screen.getAllByText("Удалить");
        fireEvent.click(removeButtons[0]); // Удаляем первый товар

        expect(screen.queryByText("Товар 1")).not.toBeInTheDocument();
        expect(screen.getByText("Цена всего: 200₽")).toBeInTheDocument();
    });

    test("Применение скидки", () => {
        render(<Cart />);

        const discountButton = screen.getByText("Применить скидку 10%");
        fireEvent.click(discountButton);

        expect(screen.getByText("Итоговая цена: 270.00₽")).toBeInTheDocument(); // 300 - 10% = 270
    });
});