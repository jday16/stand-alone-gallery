// Randomize Header

// Change Background
$('body').addClass( 'bg' + 'header'+ randNum );

// Store & Generate Number
var maxRand = 5;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/tink.png';
var img1 = '/img/fullsize/boots.jpg';
var img2 = '/img/fullsize/earth_girl.jpg';
var img3 = '/img/fullsize/flower.jpg';
var img4 = '/img/fullsize/elephant.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});

$('#aniimated-thumbnials').lightGallery({
    thumbnail:true
}); 
