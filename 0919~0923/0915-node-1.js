console.log('work test');

process.stdin.setEncoding('utf-8');

process.stdin.on('data',function(data) {
  console.time('monitor');
  console.log('a');
  console.log('b');
  console.log(data);
  console.log('c');
  console.timeEnd('monitor');
  process.exit();
})

