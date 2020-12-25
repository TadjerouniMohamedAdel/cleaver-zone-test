import React from 'react'
import './Notification.css'
import NotificationList from './NotificationList'

export default function Notification() {
    return (
        <div>
           <div className="banner">
                  <img 
                    alt=""
                    src="/assets/images/account-hub-section-banner.png"
                    srcSet="/assets/images/account-hub-section-banner@2x.png 2x,/assets/images/account-hub-section-banner@3x.png 3x"
                    className="Account-Hub-Section-Banner"
                  />
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
                    <div className="options-section">
                          <div className="options-section-item">
                                  <h2 className="options-section-item-title">
                                      <img 
                                        alt=""
                                        src="/assets/images/minus-icon.png"
                                        srcSet="/assets/images/minus-icon@2x.png 2x,/assets/images/minus-icon@3x.png 3x"
                                        className="Minus-Icon"
                                      />
                                      <span>
                                        حسابي الشخصي 
                                        <img 
                                            alt=""
                                            src="/assets/images/profile-icon.png"
                                            srcSet="/assets/images/profile-icon@2x.png 2x,/assets/images/profile-icon@3x.png 3x"
                                            className="Profile-Icon" 
                                        />
                                      </span>
                                      
                                  </h2>
                                  <div className="options-section-item-description">
                                      <p>
                                                                  لوريم ايبسوم هو نموذج افتراضي يوضع
                                          في التصاميم لتعرض على 
                                      </p>
                                  </div>
                          </div>
                          <div className="Divider"></div>
                          <div className="options-section-item-2">
                              <span className="choice-item">معلومات الحساب</span>
                              <span className="choice-item active">الإشعارات</span>
                              <span className="choice-item">الرسائل</span>
                              <span className="choice-item">طلبات الصداقة</span>
                          </div>
                          <div className="Divider"></div>
                          <div className="options-section-item">
                                  <h2 className="options-section-item-title">
                                      <img 
                                            alt=""
                                            src="/assets/images/plus-icon.png"
                                            srcSet="/assets/images/plus-icon@2x.png 2x,/assets/images/plus-icon@3x.png 3x"
                                            className="Plus-Icon" 
                                      />
                                      <span>
                                      الإعدادات 
                                      <img 
                                        alt=""
                                        src="/assets/images/settings-icon.png"
                                        srcSet="/assets/images/settings-icon@2x.png 2x,/assets/images/settings-icon@3x.png 3x"
                                        className="Profile-Icon"
                                      />
                                        
                                      </span>
                                      
                                  </h2>
                                  <div className="options-section-item-description">
                                      <p>
                                                                          لوريم ايبسوم هو نموذج افتراضي يوضع
                                                  في التصاميم لتعرض على 
                                      </p>
                                  </div>
                          </div>
                          <div className="Divider"></div>
                          <div className="options-section-item">
                                  <h2 className="options-section-item-title">
                                      <img 
                                            alt=""
                                            src="/assets/images/plus-icon.png"
                                            srcSet="/assets/images/plus-icon@2x.png 2x,/assets/images/plus-icon@3x.png 3x"
                                            className="Plus-Icon" 
                                      />
                                      <span>
                                      المجموعات
                                      <img 
                                        alt=""
                                        src="/assets/images/groups-icon.png"
                                        srcSet="/assets/images/groups-icon@2x.png 2x,/assets/images/groups-icon@3x.png 3x"
                                        className="Profile-Icon"
                                        />
                                      </span>
                                      
                                  </h2>
                                  <div className="options-section-item-description">
                                      <p>
                                                                      لوريم ايبسوم هو نموذج افتراضي يوضع
                                              في التصاميم لتعرض على 
                                      </p>
                                  </div>
                          </div>
                    </div>
                    
              </div> 
        </div>
    )
}
