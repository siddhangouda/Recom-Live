import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {

  transform(value: any): any {

    // Remove the duplicate elements
  //   var art = value.map(x=>{
  //     return x.ArticleTags.map(y=>{ return y.value;});;
  // }).reduce((acc,ele,i)=>{
  //     acc = acc.concat(ele);
  //     return acc;
  // });
  console.log("called");
  return value
  // new Set(art);
  
  }

}
