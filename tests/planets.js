/*jslint white: true*/
/*global global*/
/*global console*/
/*global log*/
/*properties
	browsergame, create, planets, toString, split, length, splice, join, push,
	random, round, log, call, indexOf, slice, floor, radius, prototype,
	earthPerc
*/
/*jshint notypeof:true*/
/*jshint undef:true*/

global.browsergame = global.browsergame || Object.create(null);

(function () {
	"use strict";
	var browsergame = function () {
		// Counter
		var i, j, k, min, max, curplanet, maxsize, minsize, sum, sumEarth, numplanets, minsat, maxsat, minsatsize, maxsatsize, planet;
		
		//minsize = 4000;
		//maxsize = 8000;
		
		minsize = 1000;
		maxsize = 70000;
		
		minsat = 0;
		maxsat = 60;
		
		minsatsize = 400;
		maxsatsize = 5000
		
		numplanets = 1000;
		
		function randomInc(min, max) {
			if (max === null || max === undefined) {
				max = min;
				min = 0;
			}
			
			return min + Math.floor(Math.random() * (max - min + 1));
		}
		
		function randomExc(min, max) {
			var tmp;
			if (max === null || max === undefined) {
				max = min;
				min = 0;
			}
			
			if (max <= min || max - min < 2) {
				return NaN;
			}
			
			tmp = min + Math.floor(Math.random() * (max - min));
			
			if (tmp === min) {
				return randomExc(min, max);
			}
			
			return tmp;
		}
		
		Array.prototype.random = Array.prototype.random || function () {
			if (this.length > 0) {
				return this[randomInc(0, this.length - 1)];
			}
		};
		Array.prototype.min = function () {
			return Math.min.apply(null, this);
		};
		Array.prototype.max = function () {
			return Math.max.apply(null, this);
		};
		
		/*
		function bint(x) {
			var s, j, d, s2;
			
			if (typeof x === 'number') {
				s = x.toString();
			}
			if (typeof s === 'string') {
				d = s.indexOf('.');
				s2 = d === -1 ? s : s.slice(0, d);
				
				// insert commas every 3 digits from the right
				for (j = s2.length - 3; j > 0; j -= 3) {
					s2 = s2.slice(0, j) + ',' + s2.slice(j);
				}
				
				// append fractional part
				if (d !== -1) {
					s2 += s.slice(d);
				}
				
				return s2;
			}
		}
		*/
		
		// @Credits: http://fantasynamegenerators.com/planet_names.php
		function nameGen(){	
			var characters1 = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
			var characters2 = ["a", "e", "o", "u"]
			var characters3 = ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"]
			var characters4 = ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"]
			var characters5 = ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"]		
			var characters6 = ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"]
			

			var random1 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random2 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random3 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random4 = parseInt(Math.floor((Math.random() * characters4.length)));	
			var random5 = parseInt(Math.floor((Math.random() * characters5.length)));
			
			var random6 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random7 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random8 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random9 = parseInt(Math.floor((Math.random() * characters1.length)));	
			var random10 = parseInt(Math.floor((Math.random() * characters6.length)));
			
			var random11 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random12 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random13 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random14 = parseInt(Math.floor((Math.random() * characters4.length)));	
			var random15 = parseInt(Math.floor((Math.random() * characters5.length)));
			
			var random16 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random17 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random18 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random19 = parseInt(Math.floor((Math.random() * characters3.length)));	
			var random20 = parseInt(Math.floor((Math.random() * characters6.length)));
			
			var random21 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random22 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random23 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random24 = parseInt(Math.floor((Math.random() * characters2.length)));	
			var random25 = parseInt(Math.floor((Math.random() * characters5.length)));
			
			var random26 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random27 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random28 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random29 = parseInt(Math.floor((Math.random() * characters3.length)));	
			var random30 = parseInt(Math.floor((Math.random() * characters6.length)));
			
			var random31 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random32 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random33 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random34 = parseInt(Math.floor((Math.random() * characters2.length)));	
			var random35 = parseInt(Math.floor((Math.random() * characters5.length)));
			
			var random36 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random37 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random38 = parseInt(Math.floor((Math.random() * characters2.length)));
			var random39 = parseInt(Math.floor((Math.random() * characters1.length)));	
			var random40 = parseInt(Math.floor((Math.random() * characters6.length)));
			
			var random41 = parseInt(Math.floor((Math.random() * characters3.length)));
			var random42 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random43 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random44 = parseInt(Math.floor((Math.random() * characters4.length)));	
			var random45 = parseInt(Math.floor((Math.random() * characters5.length)));
			
			var random46 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random47 = parseInt(Math.floor((Math.random() * characters1.length)));
			var random48 = parseInt(Math.floor((Math.random() * characters4.length)));
			var random49 = parseInt(Math.floor((Math.random() * characters3.length)));	
			var random50 = parseInt(Math.floor((Math.random() * characters6.length)));			
			
			var name = characters1[random1] + characters2[random2] + characters5[random5];
			var name2 = characters2[random6] + characters3[random7] + characters6[random10];	
			var name3 = characters3[random11] + characters4[random14] + characters5[random15];
			var name4 = characters4[random16] + characters3[random19] + characters6[random20];
			var name5 = characters3[random23] + characters4[random22] + characters2[random24] + characters5[random25];	
			var name6 = characters2[random26] + characters1[random27] + characters3[random29] + characters6[random30];	
			var name7 = characters3[random31] + characters4[random32] + characters2[random34] + characters5[random35];	
			var name8 = characters4[random36] + characters3[random37] + characters1[random39] + characters6[random40];
			var name9 = characters3[random41] + characters4[random42] + characters1[random43] + characters4[random44] + characters5[random45];	
			var name10 = characters4[random46] + characters1[random47] + characters4[random48] + characters3[random49] + characters6[random50];
			
			return [name, name2, name3, name4, name5, name6, name6, name7, name8, name9, name10].random();
		}
		
		function planetString() {
			return "Planet \"" + this.name + "\" {radius: " + this.radius + " km, earthPerc: "
				+ this.earthPerc * 100 + "%}";
		}
		
		function satelliteString() {
			return "Satellite \"" + this.name + "\" {radius: " + this.radius + " km, resource: " + this.resource + "}";
		}
		
		this.planets = [];
		
		for (i = 0; i < numplanets; i += 1) {
			planet = {
				// Size is between 400.000Km and 800.000Km (should be inclusive)
				name: nameGen(),
				type: ["desert", "dry", "normal", "jungle", "water", "ice", "gas"].random(),
				radius: randomExc(minsize, maxsize),
				earthPerc: [0.05, 0.2, 0.3, 0.5, 0.7, 0.8, 0.95].random(),
				toString: planetString,
				sats: []
			};
			
			for (j = 0, k = [0, 3, 5, 10, 12, 15, 18, 20, 40, 60].random(); j < [Math.floor(Math.floor(planet.radius) / 1000), k].min(); j++) {
				planet.sats.push({
					name: nameGen(),
					radius: randomExc(minsatsize, [planet.radius, maxsatsize].min()),
					resource: ["metal", "crystal", "fuel"].random(),
					toString: satelliteString,
				});
			}
			
			this.planets.push(planet);
		}
		
		min = max = this.planets[0];
		for (i = 0, sum = 0, sumEarth = 0; i < this.planets.length; i += 1) {
			curplanet = this.planets[i];
			
			//log(curplanet.toString());
			
			if (curplanet.radius < min.radius) {
				min = curplanet;
			} else if (curplanet.radius > max.radius) {
				max = curplanet;
			}
			
			sum += curplanet.radius;
			sumEarth += curplanet.earthPerc * 100;
		}
		
		clear();
		log("Min     Planet {radius: " + min.radius + " km}");
		log("Max     Planet {radius: " + max.radius + " km}");
		log("Average Planet {radius: " + Math.round(sum / numplanets)
			+ " km, earthPerc: " + Math.round(sumEarth / numplanets) +"%}");
		
		log("");
		
		for(i = 0; i < 10; i++) {
			log("<b>" + this.planets[i] + "</b>");
			for(j = 0; j < this.planets[i].sats.length; j++) {
				log(this.planets[i].sats[j]);
			}
			log("");
		}
	};
	
	browsergame.call(global.browsergame);
}());