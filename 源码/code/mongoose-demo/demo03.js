var mongoose = require('mongoose');
mongoose.connect('...');
mongoose.promise = global.Promise;
var Cat = mongoose.model('cat', { name: String });
for (var i = 0; i < 100; i++) {
    var ketty = new Cat({ name: 'mm' + i })
}

