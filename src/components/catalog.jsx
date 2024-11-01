import React, { useState } from 'react';
import { OneCard } from './card';
import s from './catalogtovarov.module.css'

const products = [
    {
        id: 1,
        title: 'Country Style',
        price: 740,
        image: 'https://oboikazan.ru/upload/resize_cache/iblock/3fb/kq3x1ttjv1c7ygjgm97d4yebrgxlotbn/875_372_2/123824.jpg',
        quantity: 0,
        category: 'Бабшкам',
        color: 'Белый'
    },

    {
        id: 2,
        title: 'Erismann',
        price: 890,
        image: 'https://oboikazan.ru/upload/resize_cache/iblock/f21/muwlsseefs4ze6em5a1c3yfu2y1h4oi9/875_372_2/124740.jpg',
        quantity: 7,
        category: 'Намана',
        color: 'Серый'
    },
    {
        id: 3,
        title: 'Большая медведица',
        price: 2300,
        image: 'https://alltowall.ru/upload/shop_5/6/3/8/item_6387/s260_int2.webp',
        quantity: 232,
        category: 'Детяяяяям',
        color: 'Синий'
    },
    {
        id: 4,
        title: 'Niagara',
        price: 234,
        image: 'https://oboikazan.ru/upload/resize_cache/iblock/4bc/k3swqk4ibtco0rmmiexabbldh253rszy/875_372_2/123570.jpg',
        quantity: 0,
        category: 'Бабушкам',
         color: 'Салмон'
    },

    {
        id: 5,
        title: 'Променад',
        price: 985,
        image: 'https://oboikazan.ru/upload/resize_cache/iblock/161/jf3vsjczt3iso2jr5t613ni7ncqd5jco/875_372_2/125408.jpg',
        quantity: 10,
        category: 'Бабушкам',
        color: 'Желтый'
    },
    {
        id: 6,
        title: 'Твист',
        price: 600,
        image: 'https://oboikazan.ru/upload/resize_cache/iblock/d3b/lfr3mt7p9kf8ft6q748ncnfl9b127fgg/875_372_2/125404.jpg',
        quantity: 120,
        category: 'Намана',
        color: 'Какой-то'
    }

];

export function Catalogg() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products;
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
            <h1 className={s.Zagolovktov}>Каталог товаров</h1>
            <div className={s.PoiskFiltr}>
                <input className={s.Pole}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Поиск товаров..."
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Все категории</option>
                    <option value="Намана">Намана</option>
                    <option value="Бабушкам">Бабушкам</option>
                    <option value="Детяяяяям">Детяяяяям</option>
                </select>
                <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                    <option value="">Без сортировки</option>
                    <option value="priceAsc">Цена: по возрастанию</option>
                    <option value="priceDesc">Цена: по убыванию</option>
                    <option value="quantityAsc">Количество: по возрастанию</option>
                    <option value="quantityDesc">Количество: по убыванию</option>
                </select>
            </div>


            <div className={s.da}>
                {sortedProducts.map((product) => (
                    <OneCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                        category={product.category}
                        color={product.color}
                    />
                ))}
            </div>
        </div>
    );
}