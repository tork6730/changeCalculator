$(document).ready(function(){

$("#button").click(function(){
var sale = $("#saleTotal").val();
var given = $("#givenTotal").val();

var changeReturn = given - sale;
var adollarReturn= changeReturn / 1;

var remainder1= changeReturn % 1;
var aquarterReturn= remainder1 / .25;

var remainder2= remainder1 % .25;
var adimeReturn= remainder2 / .10;

var remainder3= remainder2 % .10;
var anickelReturn= remainder3 / .05;

var remainder4= remainder3 % .05;
var apennyReturn= remainder4 / .01;


$("#dollarReturn").text (Math.floor(adollarReturn));
$("#quarterReturn").text (Math.floor(aquarterReturn));
$("#dimeReturn").text (Math.floor(adimeReturn));
$("#nickelReturn").text (Math.floor(anickelReturn));
$("#pennyReturn").text (Math.round(apennyReturn));


});

});