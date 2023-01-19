import React from 'react'
import './Tweet.css'

export default function Tweet() {
    return (
        <div className='tweet me-4'>
            <img className='tweet__user__image' src='https://lh3.googleusercontent.com/ogw/AOh-ky2n_XoYG_JW77FZHsRslTWuy3lYSw8UFUc3_BiZ4Cs=s64-c-mo' alt="user_image" />
            <div className='tweet__data mx-3'>
                <div className='tweet__data__header'>
                    <div className='font-weight-700'>ReactPlay.IO</div>
                    <div className='mx-1'>@ReactPlayIO</div>
                </div>
                <div className='tweet__data__description'>
                    You can also include Popper and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.You can also include Popper and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.
                </div>
            </div>
        </div>
    )
}
