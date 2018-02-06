(function (e, t) {
    var n = e.amplitude || { _q: [], _iq: {} }; var r = t.createElement("script")
        ; r.type = "text/javascript"; r.async = true
        ; r.src = "https://cdn.amplitude.com/libs/amplitude-4.1.0-min.gz.js"
        ; r.onload = function () {
            if (e.amplitude.runQueuedFunctions) {
                e.amplitude.runQueuedFunctions()
            } else {
                console.log("[Amplitude] Error: could not load SDK")
            }
        }
        ; var i = t.getElementsByTagName("script")[0]; i.parentNode.insertBefore(r, i)
        ; function s(e, t) {
        e.prototype[t] = function () {
            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0))); return this
        }
        }
    var o = function () { this._q = []; return this }
        ; var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"]
        ; for (var u = 0; u < a.length; u++) { s(o, a[u]) } n.Identify = o; var c = function () {
        this._q = []
            ; return this
        }
        ; var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"]
        ; for (var p = 0; p < l.length; p++) { s(c, l[p]) } n.Revenue = c
        ; var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId"]
        ; function v(e) {
            function t(t) {
            e[t] = function () {
                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
            }
            }
            for (var n = 0; n < d.length; n++) { t(d[n]) }
        } v(n); n.getInstance = function (e) {
            e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase()
                ; if (!n._iq.hasOwnProperty(e)) { n._iq[e] = { _q: [] }; v(n._iq[e]) } return n._iq[e]
        }
        ; e.amplitude = n
})(window, document);

amplitude.getInstance().init("eac723741049de758d77a003ff2821ec");

var actionMenu = {
    home: function () {
        amplitude.getInstance().logEvent('action_menu_home');
    },
    functionalities: function () {
        amplitude.getInstance().logEvent('action_menu_functionalities');
    },
    price: function () {
        amplitude.getInstance().logEvent('action_menu_price');
    },
    faq: function () {
        amplitude.getInstance().logEvent('action_menu_faq');
    },
    download: function () {
        amplitude.getInstance().logEvent('action_menu_download');
    },
    contact: function () {
        amplitude.getInstance().logEvent('action_menu_contact');
    }
}

var action = {
    dowload: function () {
        amplitude.getInstance().logEvent('action_download');
    },
    startUse: function () {
        amplitude.getInstance().logEvent('action_start_use');
    },
    speakByEmail: function () {
        amplitude.getInstance().logEvent('action_speak_by_email');
    },
    sendFormContact: function () {
        amplitude.getInstance().logEvent('action_send_form_contact');
    },
    facebook: function () {
        amplitude.getInstance().logEvent('action_facebook');
    },
    changeLanguage: function () {
        amplitude.getInstance().logEvent('action_change_language');
    },
    sendFormMail: function(){
        amplitude.getInstance().logEvent('action_send_form_mail');

        sendMail()
    }
}

var actionFAQ = {
    howToInstall: function () {
        amplitude.getInstance().logEvent('action_faq_how_to_install');
    },
    howToChangeLanguage: function () {
        amplitude.getInstance().logEvent('action_faq_how_to_change_language');
    },
    moreStrokes: function () {
        amplitude.getInstance().logEvent('action_faq_more_strokes');
    }
}

function sendMail(){
    var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var subject = document.getElementById("subject").value
        var message = document.getElementById("message").value

        window.open('mailto:support@tracefacil.com?subject=' + subject + '&body=' + message + ' ' + name + ' - ' + email);
}

document.getElementById("sendEmail").onclick = function () {
    action.sendFormMail()
};
