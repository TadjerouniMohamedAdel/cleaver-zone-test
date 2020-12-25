import React from 'react'
import './Header.css'
import HeaderActions from './HeaderActions'
import HeaderSearch from './HeaderSearch'
export default function Header() {
    return (
        <div className="header">
           <HeaderActions />
           <div className="divider"></div>
            <HeaderSearch />
            <div className="header-aboutus">
                <a>خدماتنا</a>
                <a>من نحن؟</a>
            </div>
            <div className="header-title">
                <h1>شبكة الباحثين</h1>
                <img
                    alt="" 
                    src="/assets/images/path-5150.png"
                    srcSet="/assets/images/path-5150@2x.png 2x,/assets/images/path-5150@3x.png 3x"
                    className="Path-5150"
                />
            </div>
        </div>
    )
}
