import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const { t } = useTranslation();
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination-container">
            <button className="pagination-button" onClick={handlePrev} disabled={currentPage === 1}>
                &lt; {t('Prev')}
            </button>
            <span className="pagination-info"> {t('Page')} {currentPage} {t('of')} {totalPages}</span>
            <button className="pagination-button" onClick={handleNext} disabled={currentPage === totalPages}>
                {t('Next')} &gt;
            </button>
        </div>
    );
};

export default Pagination;