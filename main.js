window.onload = function(){ 
  document.getElementById('responsive-background').onclick = function(){
    requestAnimation( this );
  };

  var requestAnimation = function( obj ){
    obj.style.animation = 'none';
    window.requestAnimationFrame(function(){
      obj.style.animation = 'color_touch 15s';
    });
  }
};
