import React from 'react'
import './Notifications.css'
import NotificationList from './NotificationList'
import NotificationMenu from './NotificationMenu'

export default function Notification() {
    
    return (
        <div>
           <div className="banner">
                  <img  className="Account-Hub-Section-Banner" alt="" src="/assets/images/account-hub-section-banner.png" srcSet="/assets/images/account-hub-section-banner@2x.png 2x,/assets/images/account-hub-section-banner@3x.png 3x"  />
              </div>
              <div className="group-section">
                    <div className="section-content">
                            <div className="section-content-header">
                                <div>
                                    <span className="header-choice active">إعتبار جميع الرسائل مقروءة</span>
                                    <span className="header-choice">الإعدادات</span>
                                </div>
                                <div className="primary-title">الإشعارات</div>
                            </div>
                            <NotificationList />
                    </div>
                    <NotificationMenu />
                    
              </div> 
        </div>
    )
}
