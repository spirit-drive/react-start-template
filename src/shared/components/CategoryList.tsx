import React from 'react';
import './css/categoryList.css';

interface CategoryListProps {
    categories: { id: string; name: string }[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    return (
        <div className="category-list-container">
            {categories.map((category) => (
                <div key={category.id} className="category-list-item">
                    {category.name} - {category.id}
                </div>
            ))}
        </div>
    );
};

export default CategoryList;