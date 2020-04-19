// var host = "yashagarwal.in";
// if ((host == window.location.host) && (window.location.protocol != 'https:')) {
//   window.location = window.location.toString().replace(/^http:/, "https:");
// }

//check if http && NOT localhost or 127.0.0.1
function _httpsAlways() {
    if (location.protocol == 'http:' && (location.hostname != "127.0.0.1" && location.hostname != "localhost"))
        location.href = location.href.replace("http", "https");
}

//auto redirect from current *.gitlab.io to custom domain
//send destination domain as domainTo (FQDN)
function _notGitLab(domainTo = true) {
    var x = location.hostname.search("gitlab.io") != -1 ? true : false; // true if *.gitlab.io
    if (x) {
        location.href = domainTo;
    }
}

function _notGitHub(domainTo = true) {
    var x = location.hostname.search("github.io") != -1 ? true : false; // true if *.github.io
    if (x) {
        location.href = domainTo;
    }
}

_notGitLab("https://yashagarwal.in");
_notGitHub("https://yashagarwal.in");
_httpsAlways(); //no need as SSL address already passed in above request // NEED as notGitLab() works only if starting domain is *.gitlab.io
