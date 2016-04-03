import fs from 'fs';

export default function *(next){
  const indexHtml = fs.readFileSync('public/index.' + process.env.NODE_ENV + '.html').toString();
  // console.log(indexHtml);
  if(this.path.indexOf('api') === -1){
    this.body = indexHtml;
  }else{
    yield next;
  }
}