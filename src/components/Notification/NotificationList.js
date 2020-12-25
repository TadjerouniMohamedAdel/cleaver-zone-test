import React from 'react'

export default function NotificationList() {
    const notifications = [
        {
          action:"بلال بوعيشة علّق ",
          time:"منذ 2 دقيقة",
          reaction:"comment",
          icon:"/assets/images/activity-icon.svg"
        },
        {
          action:"إلياس بوجلطية تفاعل بـ",
          time:"منذ 17 دقيقة",
          reaction:"like",
          icon:"/assets/images/activity-icon_2.svg"
        },
        {
          action:"بلال بوعيشة علّق ",
          time:"منذ 2 دقيقة",
          reaction:"comment",
          icon:"/assets/images/activity-icon.svg"
        },
        {
          action:"بلال بوعيشة علّق ",
          time:"منذ 2 دقيقة",
          reaction:"comment",
          icon:"/assets/images/activity-icon.svg"
        },
        {
          action:"إلياس بوجلطية تفاعل بـ",
          time:"منذ 17 دقيقة",
          reaction:"love",
          icon:"/assets/images/activity-icon_2.svg"
        },
        {
          action:"بلال بوعيشة علّق ",
          time:"منذ 2 دقيقة",
          reaction:"comment",
          icon:"/assets/images/activity-icon.svg"
        },
        {
          action:"بلال بوعيشة علّق ",
          time:"منذ 2 دقيقة",
          reaction:"comment",
          icon:"/assets/images/activity-icon.svg"
        },
        {
          action:"إلياس بوجلطية تفاعل بـ",
          time:"منذ 17 دقيقة",
          reaction:"love",
          icon:"/assets/images/activity-icon_2.svg"
        },
      
      ]
    return (
        <div className="section-content-notifications">
                                {notifications.map((notif,index)=>(
                                    <div className="notification-card" key={index}>
                                              <div>
                                                <img
                                                    alt="" 
                                                    src={notif.icon}
                                                    className="Activity-Icon"
                                                />
                                              </div>
                                              <div className="notification-content">
                                                <div className="notification-details">
                                                  <span className="notification-action">
                                                        {notif.action}
                                                        {

                                                        }
                                                        {notif.reaction=="love"&&(
                                                        <img 
                                                            alt=""
                                                            src="/assets/images/love.svg"
                                                            className="Love"
                                                        />
                                                        )}
                                                        {notif.reaction=="like"&&(
                                                              <div className="cover-like">
                                                                <img
                                                                    alt="" 
                                                                    src="/assets/images/activity-icon_white_2.svg"
                                                                    className="Thumbs-Up"
                                                                  />
                                                              </div>

                                                        )}
                                                        <span style={{color:"#00c7d9"}}>على منشورك</span>
                                                        
                                                  </span>
                                                    <span className="notification-time">{notif.time}</span>

                                                </div>
                                                <div className="Rectangle-1384"></div>
                                              </div>
                                    </div>
                                ))}
                            </div>
    )
}
