import React from 'react';

const Recordings = () => {
    return (
        <div className="w-100 h-100 p-4">
            <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" title="SoundcloudPlayer"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1160383771&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
        </div>
    )
}

export default Recordings;