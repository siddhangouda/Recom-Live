import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimations]'
})
export class AnimationsDirective {

 delay :string;

  constructor(private el:ElementRef) { 
  }



  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 250) {
      console.log('show')

    } else {
      console.log('hide')
    }

  }

}

//   @HostListener('window:scrollIntoView', [])
//   scrollHandler(event) :void{
//     console.log("Scroll Event");
//     const rect = this.el.nativeElement.getBoundingClientRect();
//     let scroll = this.mapRange(0,window.innerHeight,0,1,rect.top +(rect.height/2));
//     scroll = scroll < 0 ? 0 : scroll > 1 ? 1 : scroll; 
//     this.delay = `${scroll.toFixed(2)}s`
//     console.log(rect)
    
//   }

//   @HostBinding('style.animationDelay') get animationDelay(): string{
//     console.log(this.delay)
//     return this.delay ;
   
//   }
  

// mapRange(a1:number, a2:number, b1:number, b2:number, value:number) {
//   return b1 + ((value- a1)* (b2 -b1 )) /(a2 - a1);
// }

