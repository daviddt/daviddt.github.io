self.addEventListener('message', function(e) {
    var j = 0;
		
    for (var i = 0; i < 1000000000; i++) {
        j = j + i;
    };
  
    self.postMessage(j);
});