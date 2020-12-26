import React,{useState} from 'react'
const menus= [
    {
        src:"/assets/images/profile-icon.png",
        srcSet:"/assets/images/profile-icon@2x.png 2x,/assets/images/profile-icon@3x.png 3x",
        name:"حسابي الشخصي",
        choices:["معلومات الحساب","الإشعارات","الرسائل","طلبات الصداقة"]
    },
    {
        src:"/assets/images/settings-icon.png",
        srcSet:"/assets/images/settings-icon@2x.png 2x,/assets/images/settings-icon@3x.png 3x",
        name:"الإعدادات",
        choices:["item 1","item 2","item 3"] 
    },
    {
        src:"/assets/images/groups-icon.png",
        srcSet:"/assets/images/groups-icon@2x.png 2x,/assets/images/groups-icon@3x.png 3x",
        name:"المجموعات",
        choices:["item 1","item 2","item 3"]
    }
]

export default function NotificationMenu() {
    const [menuActive,setMenuActive] = useState(0)
    const [choiceActive,setChoiceActive] = useState(1)


    return (
        <div className="options-section">
        {
            menus.map((menu,indexMenu)=>(
                <div  key={menu.name}>
                    <div className="options-section-item">
                        <h2 className="options-section-item-title">
                            <img 
                                alt=""
                                src={menuActive !==indexMenu?"/assets/images/plus-icon.svg":"/assets/images/minus-icon.svg"}
                                className="Plus-Icon"
                                onClick={()=>{setChoiceActive(null);setMenuActive(menuActive===indexMenu?null:indexMenu)}} 
                            />
                            <span>
                                {menu.name}
                                <img  alt="" src={menu.src} srcSet={menu.srcSet} className="Profile-Icon"/>
                            </span>
                        </h2>
                        <div className="options-section-item-description">
                            <p>
                                                        لوريم ايبسوم هو نموذج افتراضي يوضع
                                في التصاميم لتعرض على 
                            </p>
                        </div>
                    </div>
                    {indexMenu!==menus.length-1 && <div className="Divider"></div>}
                    {menuActive ===indexMenu &&(
                        <div>
                            <div className="options-section-item-2">
                                    { menu.choices.map((choice,indexChoice)=>(
                                        <span key={indexMenu+indexChoice} onClick={()=>setChoiceActive(indexChoice)} className={`choice-item ${choiceActive===indexChoice && 'active'}`}>{choice}</span>
    
                                    ))}
                            </div>
                            {indexMenu!==menus.length-1 && <div className="Divider"></div>}

                        </div>

                    )}
                </div>
            ))
        }
          
    </div>
    )
}
