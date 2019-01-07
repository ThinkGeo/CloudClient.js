class Util {
    static getAccessTokenFromLocalStorage(accessToken) {
        for (let key in accessToken) {
            let itemValue = localStorage.getItem(key);
            if (itemValue === undefined) {
                throw "Token Item Missing";
            }
            else {
                accessToken[key] = itemValue;
            }
        }
    }
    static setAccessTokenToLocalStorage(accessToken) {
        for (let key in accessToken) {
            localStorage.setItem(key, accessToken[key])
        }
    }
    static removeAccessTokenFromLocalStorage(accessToken) {
        for (let key in accessToken) {
            localStorage.removeItem(key)
        }
    }

    static getLocalStorage(name) {
        return localStorage.getItem(name);
    }
    static setLocalStorage(name, value) {
        localStorage.setItem(name, value)
    }

    static setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1000));
        // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    static getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

export default Util