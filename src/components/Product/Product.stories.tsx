import type { Meta, StoryObj } from '@storybook/react';

import { Product } from './Product';

const meta: Meta<typeof Product> = {
    title: 'Shop/Products/Product',
    component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Default: Story = {
    args: {
        image: [
            'https://c.dns-shop.ru/thumb/st1/fit/500/500/0cd5d8aae06ad382746d9a57b13fae68/768b92052c6ff58cb872ea2b548f2bad237ebdc5a951b6c7eb3f777960418ab3.jpg',
            'https://c.dns-shop.ru/thumb/st1/fit/200/200/c95678797ce1147189a220a8fc935628/768b92052c6ff58cb872ea2b548f2bad237ebdc5a951b6c7eb3f777960418ab3.jpg',
            'https://c.dns-shop.ru/thumb/st1/fit/200/200/c95678797ce1147189a220a8fc935628/768b92052c6ff58cb872ea2b548f2bad237ebdc5a951b6c7eb3f777960418ab3.jpg',
            'https://c.dns-shop.ru/thumb/st1/fit/200/200/c95678797ce1147189a220a8fc935628/768b92052c6ff58cb872ea2b548f2bad237ebdc5a951b6c7eb3f777960418ab3.jpg',
        ],
        name: '15.6" Ноутбук IRBIS NB260',
        description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',
        price: '18000'
    }
};