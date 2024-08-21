import { I18nContextType } from "./localTypes"

export const resource: I18nContextType['i18n'] = {
    en: {
        components: {
            header: {
                theme: 'Сhange theme',
                login: 'Login form',
                registration: 'Registration',
                language: 'Сhange language',
                operations: 'Operations',
                profile: 'Profile'
            },
            operation:{
                operationTitle: 'Operations',
                categoryTitle: 'Categories',
                productTitle: 'Products',
                addOperation: 'Add operation',
                addCategory: 'Add category',
                addProduct: 'Add product',
            },
            testLanguage: {
                text: 'Сhange language',
            }
        }
    },
    ru: {
        components: {
            header: {
                theme: 'Сменить тему',
                login: 'Форма входа',
                registration: 'Регистрация',
                language: 'Сменить язык',
                operations: 'Операции',
                profile: 'Профиль'
            },
            operation:{
                operationTitle: 'Операции',
                categoryTitle: 'Категории',
                productTitle: 'Продукты',
                addOperation: 'Добавить операцию',
                addCategory: 'Добавить категорию',
                addProduct: 'Добавить продукт',
            },
            testLanguage: {
                text: 'сменить язык',
            }
        }
    }
}