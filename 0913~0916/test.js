const fs = require('fs');
const { connected } = require('process');

fs.mkdir('./abcd', function(error) {
  if(error){
    throw error;
  }
});
