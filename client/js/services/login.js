"use strict";app.factory("login",["$http",function(t){var n={};return n.loginWithTicket=function(n){return new Promise(function(i,o){var r={ticketNumber:n};t.post("/login",r).then(function(t){i("OK")},function(){o()})})},n}]);