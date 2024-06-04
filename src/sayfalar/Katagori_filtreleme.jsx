import React, { useState } from 'react';
import { Button, Select, MenuItem, Typography } from '@mui/material';

// Kategorileri ve en çok satan ürünleri temsil eden veri
const categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Kitaplar' },
    { id: 3, name: 'Giyim' }
];

const bestSellingProducts = {
    1: ['Telefon', 'Laptop', 'Tablet'],
    2: ['Roman', 'Bilim Kurgu', 'Biyografi'],
    3: ['Tişört', 'Pantolon', 'Ayakkabı']
};

const BestSellingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        const selectedProducts = bestSellingProducts[categoryId];
        setSelectedCategory(categoryId);
        setProducts(selectedProducts || []);
    };

    return (
        <div>
            <Typography marginTop={10} variant='h6' marginLeft={5}>En Çok Satanlar</Typography>
            <Select sx={{marginLeft:5, width:100, height:35}} value={selectedCategory} onChange={handleCategoryChange}>
                <MenuItem value="">Kategori Seçin</MenuItem>
                {categories.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.name}
                    </MenuItem>
                ))}
            </Select>

            <Typography marginTop={10} variant='h6' marginLeft={5}>En Çok Satan Ürünler</Typography>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product}>{product}</li>
                    ))}
                </ul>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default BestSellingPage;