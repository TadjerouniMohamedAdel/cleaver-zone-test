import React from 'react'

export default function HeaderActions() {
    return (
        <div className="header-actions">

            <img 
                alt=""
                src="/assets/images/settings-5-line.png" 
                srcSet="/assets/images/settings-5-line@2x.png 2x,/assets/images/settings-5-line@3x.png 3x"
                className="settings-5-line" 
            />

            <div className="divider"></div>
          
            <div className="alert-notification">
                <div className="Alert-Detail"></div>
                <img 
                    alt=""
                    src="/assets/images/notification-2-line.png"
                    srcSet="/assets/images/notification-2-line@2x.png 2x,/assets/images/notification-2-line@3x.png 3x"
                    className="notification-2-line" 
                />

            </div>
          
            <img 
                alt=""
                src="/assets/images/question-answer-line.png"
                srcSet="/assets/images/question-answer-line@2x.png 2x,/assets/images/question-answer-line@3x.png 3x"
                className="question-answer-line" 
            />
          
            <img
                alt="" 
                src="/assets/images/eye-line.png"
                srcSet="/assets/images/eye-line@2x.png 2x,/assets/images/eye-line@3x.png 3x"
                className="eye-line" 
            />
        </div>
    )
}
