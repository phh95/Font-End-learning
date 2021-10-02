function Hero(hname, type, blood) {
    this.name = hname;
    this.type = type;
    this.blood = blood;
    this.attack = function(attack) {
        console.log('攻击：' + attack);
    }
}

var lianpo = new Hero('廉颇', '力量型', 500);
console.log(lianpo.name);
console.log(lianpo.type);
console.log(lianpo.blood);

lianpo.attack('近战');

var houyi = new Hero('后裔', '射手型', 100);
console.log(houyi.name);
console.log(houyi.type);
console.log(houyi.blood);

houyi.attack('远程');