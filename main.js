/**
 * Created by KT on 4/6/2017.
 */

/* Insults found from: http://web.mit.edu/dryfoo/Funny-pages/shakespeare-insult-kit.html */
function col1(word1){
    var part1 = Math.floor((Math.random() * 20));
    switch(part1) {
        case 0:
            word1.WordBox.value = "beslubbering ";
            break;
        case 1:
            word1.WordBox.value = "yeasty";
            break;
        case 2:
            word1.WordBox.value = "dankish";
            break;
        case 3:
            word1.WordBox.value = "fawning";
            break;
        case 4:
            word1.WordBox.value = "frothy";
            break;
        case 5:
            word1.WordBox.value = "warped";
            break;
        case 6:
            word1.WordBox.value = "unmuzzled";
            break;
        case 7:
            word1.WordBox.value = "reeky";
            break;
        case 8:
            word1.WordBox.value = "lumpish";
            break;
        case 9:
            word1.WordBox.value = "goatish";
            break;
        case 10:
            word1.WordBox.value = "mewling";
            break;
        case 11:
            word1.WordBox.value = "droning";
            break;
        case 12:
            word1.WordBox.value = "qualling";
            break;
        case 13:
            word1.WordBox.value = "ruttish";
            break;
        case 14:
            word1.WordBox.value = "spleeny";
            break;
        case 15:
            word1.WordBox.value = "jarring";
            break;
        case 16:
            word1.WordBox.value = "puking";
            break;
        case 17:
            word1.WordBox.value = "infectious";
            break;
        case 18:
            word1.WordBox.value = "gleeking";
            break;
        case 19:
            word1.WordBox.value = "saucy";
            break;
        case 20:
            word1.WordBox.value = "tottering";
            break;
        default :
            word1.WordBox.value = "How????";
            break;
    }
}
document.getElementById("col1").innerHTML = col1();
function col2(word2){
    var part1 = Math.floor((Math.random() * 20));
    switch(part1) {
        case 0:
            word2.WordBox.value ="bat-fowling";
            break;
        case 1:
            word2.WordBox.value = "common-kissing";
            break;
        case 2:
            word2.WordBox.value = "elf-skinned";
            break;
        case 3:
            word2.WordBox.value = "half-faced";
            break;
        case 4:
            word2.WordBox.value = "tickle-brained";
            break;
        case 5:
            word2.WordBox.value = "onion-eyed";
            break;
        case 6:
            word2.WordBox.value = "knotty-pated";
            break;
        case 7:
            word2.WordBox.value = "hedge-born";
            break;
        case 8:
            word2.WordBox.value = "fen-sucked";
            break;
        case 9:
            word2.WordBox.value = "plume-plucked";
            break;
        case 10:
            word2.WordBox.value = "beetle-headed";
            break;
        case 11:
            word2.WordBox.value = "doghearted";
            break;
        case 12:
            word2.WordBox.value = "clay-brained";
            break;
        case 13:
            word2.WordBox.value = "boil-brained";
            break;
        case 14:
            word2.WordBox.value ="dismal-dreaming";
            break;
        case 15:
            word2.WordBox.value ="hell-hated";
            break;
        case 16:
            word2.WordBox.value ="reeling-ripe";
            break;
        case 17:
            word2.WordBox.value ="sheep-biting";
            break;
        case 18:
            word2.WordBox.value ="rump-fed";
            break;
        case 19:
            word2.WordBox.value ="unchin-snouted";
            break;
        case 20:
            word2.WordBox.value ="guts-griping";
            break;
        default :
            word2.WordBox.value = "How????";
            break;
    }
}
document.getElementById("col2").innerHTML = col2();
function col3(word3){
    var part1 = Math.floor((Math.random() * 20));
    switch(part1) {
        case 0:
            word3.WordBox.value = "baggage";
            break;
        case 1:
            word3.WordBox.value = "bugbear";
            break;
        case 2:
            word3.WordBox.value = "death-token";
            break;
        case 3:
            word3.WordBox.value = "codpiece";
            break;
        case 4:
            word3.WordBox.value = "lewdster";
            break;
        case 5:
            word3.WordBox.value = "pigeon-egg";
            break;
        case 6:
            word3.WordBox.value = "vassal";
            break;
        case 7:
            word3.WordBox.value = "wagtail";
            break;
        case 8:
            word3.WordBox.value = "foot-licker";
            break;
        case 9:
            word3.WordBox.value = "bum-bailey";
            break;
        case 10:
            word3.WordBox.value = "clotpole";
            break;
        case 11:
            word3.WordBox.value = "moldwarp";
            break;
        case 12:
            word3.WordBox.value = "mumble-news";
            break;
        case 13:
            word3.WordBox.value = "minnow";
            break;
        case 14:
            word3.WordBox.value = "measle";
            break;
        case 15:
            word3.WordBox.value = "joithead";
            break;
        case 16:
            word3.WordBox.value = "gudgeon";
            break;
        case 17:
            word3.WordBox.value = "flirt-gill";
            break;
        case 18:
            word3.WordBox.value = "canker-blossom";
            break;
        case 19:
            word3.WordBox.value = "haggard";
            break;
        case 20:
            word3.WordBox.value = "hugger-mugger";
            break;
        default :
            word3.WordBox.value = "How?????";
            break;
    }
}
document.getElementById("col3").innerHTML = col3();
window.onload = function() {
    document.getElementById("sendButton").onclick = function() {
        if (check()) {
            send();
        }
    };
};