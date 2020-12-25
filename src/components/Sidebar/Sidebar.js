import React,{useState} from 'react'
import './Sidebar.css'

const badges =[
    {
        src:"/assets/images/more-small-badge.png",
        srcSet:"/assets/images/more-small-badge@2x.png 2x,/assets/images/more-small-badge@3x.png 3x"
    },
    {
        src:"/assets/images/04.png",
        srcSet:"/assets/images/04@2x.png 2x,/assets/images/04@3x.png 3x"
    },
    {
        src:"/assets/images/03.png",
        srcSet:"/assets/images/03@2x.png 2x,/assets/images/03@3x.png 3x"
    },
    {
        src:"/assets/images/02.png",
        srcSet:"/assets/images/02@2x.png 2x,/assets/images/02@3x.png 3x"
    },
    {
        src:"/assets/images/01.png",
        srcSet:"/assets/images/01@2x.png 2x,/assets/images/01@3x.png 3x"
    }
]

const links =[
    {
        name:"الواجهة الرئيسية",
        src:"/assets/images/newsfeed-icon.png",
        srcSet:"/assets/images/newsfeed-icon@2x.png 2x,/assets/images/newsfeed-icon@3x.png 3x",
    },
    { 
        name:"الملف الشخصي",
        src:"/assets/images/overview-icon.png",
        srcSet:"/assets/images/overview-icon@2x.png 2x,/assets/images/overview-icon@3x.png 3x",
    },
    {
        name:"الرسائل",
        src:"/assets/images/quests-icon.png",
        srcSet:"/assets/images/quests-icon@2x.png 2x,/assets/images/quests-icon@3x.png 3x",
    },
    {
        name:"معلومات الحساب",
        src:"/assets/images/events-icon.png",
        srcSet:"/assets/images/events-icon@2x.png 2x,/assets/images/events-icon@3x.png 3x",
    },
    {
        name:"الإعدادات",
        src:"/assets/images/marketplace-icon.png",
        srcSet:"/assets/images/marketplace-icon@2x.png 2x,/assets/images/marketplace-icon@3x.png 3x",
    }
]

const overviews =[
    {name:"المنشورات",value:"930"},{name:"الأصدقاء",value:"82"},{name:"الزيارات",value:"5.7K"}
]

const Rectangles = function(){
    return(
        <div className="Rectangle-5">
            <div className="Rectangle-4">
                <div className="Rectangle-3">
                    <div className="Rectangle-2">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Sidebar() {
    const [activeIndex,setActiveIndex] = useState(1)
    return (
        <div className="sidebar">
            <div className="bondeau"></div>
            <div className="profile">
                <Rectangles />
                <h2 className="profile-title">معاذ محساس</h2>
                <span className="profile-job">UI / UX Researcher</span>
            </div>
            <div className="profile-badges">
                {
                    badges.map((item)=>(
                        <img alt="" src={item.src} srcSet={item.srcSet} key={item.src} className="profile-badges-item"/>
                    ))
                }
            </div>
            <div className="profile-overviews">
                {
                    overviews.map(item=>(
                        <div className="profile-overviews-item" key={item.name}>
                            <span className="profile-overviews-item-value">{item.value}</span>
                            <span className="profile-overviews-item-name">{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <div className="sidebar-links">
                {
                    links.map((link,index)=>(
                        <div key={link.name} onClick={()=>setActiveIndex(index)}className={`sidebar-links-item ${activeIndex==index && 'active'}`}>
                            <span className={`link-name`}>{link.name}</span>
                            <img alt="" src={link.src} srcSet={link.srcSet} className="link-icon"  />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

