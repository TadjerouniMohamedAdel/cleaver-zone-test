import React,{useState} from 'react'
const notifications = [
    {
      id:0,
      action:"بلال بوعيشة علّق ",
      time:"منذ 2 دقيقة",
      reaction:"comment",
      icon:"/assets/images/activity-icon.svg"
    },
    {
      id:1,
      action:"إلياس بوجلطية تفاعل بـ",
      time:"منذ 17 دقيقة",
      reaction:"like",
      icon:"/assets/images/activity-icon_2.svg"
    },
    {
      id:2,
      action:"بلال بوعيشة علّق ",
      time:"منذ 2 دقيقة",
      reaction:"comment",
      icon:"/assets/images/activity-icon.svg"
    },
    {
      id:3,
      action:"بلال بوعيشة علّق ",
      time:"منذ 2 دقيقة",
      reaction:"comment",
      icon:"/assets/images/activity-icon.svg"
    },
    {
      id:4,
      action:"إلياس بوجلطية تفاعل بـ",
      time:"منذ 17 دقيقة",
      reaction:"love",
      icon:"/assets/images/activity-icon_2.svg"
    },
    {
      id:5,
      action:"بلال بوعيشة علّق ",
      time:"منذ 2 دقيقة",
      reaction:"comment",
      icon:"/assets/images/activity-icon.svg"
    },
    {
      id:6,
      action:"بلال بوعيشة علّق ",
      time:"منذ 2 دقيقة",
      reaction:"comment",
      icon:"/assets/images/activity-icon.svg"
    },
    {
      id:7,
      action:"إلياس بوجلطية تفاعل بـ",
      time:"منذ 17 دقيقة",
      reaction:"love",
      icon:"/assets/images/activity-icon_2.svg"
    },
  
  ]
export default function NotificationList() { 
  const [list,setList] = useState(notifications)
  
    return (
        <div className="section-content-notifications">
            {list.length === 0&& <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:20,alignItems:"center"}}>ليس هنالك إشعارات حاليا</div>}
            {list.map((notif,index)=>(
                <div className="notification-card" key={index}>
                    <div>
                        <div onClick={()=>{setList(list.filter(item=>item.id!==notif.id))}} className="close-notif"><img src={'https://cdn.iconscout.com/icon/free/png-256/close-148-457764.png'} alt="" className="Delete-Icon"/></div>
                        <img alt="" src={notif.icon} className="Activity-Icon" />
                    </div>
                    <div className="notification-content">
                        <div className="notification-details">
                                <span className="notification-action">
                                    {notif.action}
                                    {notif.reaction==="love"&&(
                                    <img 
                                        alt=""
                                        src="/assets/images/love.svg"
                                        className="Love"
                                    />
                                    )}
                                    {notif.reaction==="like"&&(
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
