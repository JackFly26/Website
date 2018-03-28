var sketch = function(p){
  var cnv,img;
  var resdiv;
  var options = [' ','`','.',',-',"':",';_~','"','*|','!l',
  '+=','>','<L','\\i','/^','1?','Jv','r','()cx','7}','sz',
  '3u','2Ckty{','jn','4FVY','5P[]af','qw','Sde','Eo',
  'NOZ','9HXgh','GTU','$AIm','QW','KM','%8','#06@','bp',
  'D','&','R','B'];
  var gui,btn,livebtn;
  var live = false;
  var capture;
  var pg;

  p.setup = function() {
    //paragraph for display of ascii result
    resdiv = p.createP('');

    //video capture elements
    pg = p.createGraphics(160,120);
    capture = p.createCapture(p.VIDEO);
    capture.size(80, 60);
    capture.hide();

    //gui elements
    btn = p.createButton('UPDATE');
    btn.mousePressed(p.calcCapture);
    gui = p.createDiv('');
    btn.parent(gui);
    livebtn = p.createButton('LIVE');
    livebtn.mousePressed(function(){live=!live;});
    livebtn.parent(gui);

    cnv = p.createCanvas(400,300);
    p.background(255);

    img = p.loadImage('charlize_level.jpg', function(pic){
      p.calcImg(pic);
    });
  }

  p.draw = function() {
    p.image(capture, 0, 0, p.width, p.height);
    if (live) p.calcCapture();
  }

  p.calcImg = function(pic) {
    var res = '<pre>';
    for (var i=0; i<60; i++) {
      var line = '';
      for (var j=0; j<140; j++) {
        var x = pic.get(2+p.round(j*5.714),5+i*10);
        var v = p.round((1-x[0]/255.0)*40);
        var index = p.floor(p.random(options[v].length));
        var chr = options[v][index];
        if (chr==' ') chr='&nbsp;';
        if (chr=='<') chr='&lt;';
        if (chr=='>') chr='&gt;';
        if (chr=='"') chr='&quot;';
        line += chr;
      }
      res += line+'<br>';
    }
    res += '</pre>'
    resdiv.html(res);
  }

  p.calcCapture = function() {
    pg.image(capture,0,0,80,60);
    var res = '<pre>';
    for (var i=0; i<60; i++) {
      var line = '';
      for (var j=0; j<140; j++) {
        var x = pg.get(p.round(j*1.143),i*2);
        var f = (1-x[0]/255.0);
        f = f*f; //square factor to lighten up, because less bright characters
        var v = p.round(f*40);
        var index = p.floor(p.random(options[v].length));
        var chr = options[v][index];
        if (chr==' ') chr='&nbsp;';
        if (chr=='<') chr='&lt;';
        if (chr=='>') chr='&gt;';
        if (chr=='"') chr='&quot;';
        line += chr;
      }

      res += line+'<br>';
    }
    res += '</pre>'
    resdiv.html(res);
  }
}
var yeetp5 = new p5(sketch);
