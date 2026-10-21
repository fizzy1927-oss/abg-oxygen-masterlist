/* Pocket Pulmo · anonymous visit counts (GoatCounter)
   No cookies, no accounts, no personal info: it only counts page visits (plus browser type,
   screen size and country) so you can see how much the site is used.

   TO TURN IT ON: make a free account at https://www.goatcounter.com, pick a code (e.g. pocketpulmo),
   and put that code between the quotes below. Leave it empty ("") to turn counting off.
   Your stats will be at https://YOUR-CODE.goatcounter.com */
var PP_STATS_CODE = "";

(function () {
  var code = String(PP_STATS_CODE || "").trim();
  if (!code || !/^[a-z0-9-]+$/i.test(code)) return;                         // off, or not a valid code
  if (!/^https?:$/.test(location.protocol) || /^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)) return; // not on the live site
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.globalPrivacyControl) return;     // visitor asked not to be counted
  if (navigator.onLine === false) return;                                       // offline: nothing to send
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(s);
})();
