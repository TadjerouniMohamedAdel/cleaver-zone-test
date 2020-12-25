import React from 'react'

export default function HeaderSearch() {
    return (
        <div className="header-search">
            <img 
                alt=""
                src="/assets/images/search-line.png"
                srcSet="/assets/images/search-line@2x.png 2x,/assets/images/search-line@3x.png 3x"
                className="search-line"
            />
            <input 
                type="text"
                name="search"
                placeholder="إبحث هنا عن أشخاص أو مجموعات"
            />
        </div>
    )
}
