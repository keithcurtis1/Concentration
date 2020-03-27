var TOKEN_CONCENTRATING_STATUS_MARKER = "status_" + "Concentrating::35390";
on("change:graphic:bar1_value", function(obj, prev) {
    if (obj.get(TOKEN_CONCENTRATING_STATUS_MARKER)) {
        var playerPage = Campaign().get("playerpageid");
        var tokenPage = obj.get("_pageid");
        if (prev["bar1_value"] > obj.get("bar1_value")) {
            var final_conc_DC = 10;
            var calc_conc_DC = (prev["bar1_value"] - obj.get("bar1_value")) / 2;
            if (calc_conc_DC > final_conc_DC) {
                final_conc_DC = Math.floor(calc_conc_DC);
            }
            sendChat("TokenDamage", "/w gm &{template:npcaction} {{rname=Concentration Check}} {{description=[DC " +final_conc_DC + " Constitution](~selected|constitution_save)"+ "&#10;" +"*[Toggle Concentration Marker](!token-mod --sel --set statusmarkers|!Concentrating)*}}");        }
    }
});
