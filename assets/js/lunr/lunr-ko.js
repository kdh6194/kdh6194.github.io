var lunr = require('./lunr.js');
require('./lunr.stemmer.support.js')(lunr);
require('./lunr.ko.js')(lunr);

var builder = new lunr.Builder();

builder.pipeline.add(
  lunr.ko.trimmer,
  lunr.ko.stopWordFilter,
  lunr.ko.stemmer
);

builder.searchPipeline.add(
  lunr.ko.stemmer
);

module.exports = function (config) {
  config.call(builder, builder);
  return builder.build();
};