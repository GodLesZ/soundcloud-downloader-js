"use strict";

import requestSync from 'request-sync';

export default class SoundcloudLoader {

    /**
     * @returns {RegExp}
     */
    static get reScrl() {
        return /^https?:\/\/soundcloud.com\/([^/]+)\/([^/]+)$/i;
    }

    static get reSongFromUrl() {
        return /"uri":"https:\/\/api.soundcloud.com\/tracks\/([^"]+)/i;
    }


    __construct() {

    }


    request(term) {
        let promise = null;
        if (SoundcloudLoader.reScrl.test(term)) {
            let html = requestSync(term);
            if (SoundcloudLoader.reSongFromUrl.test(html)) {
                let m = SoundcloudLoader.reSongFromUrl.exec(html),
                    songId = m[1];
            }
        }

        return promise;
    }

}