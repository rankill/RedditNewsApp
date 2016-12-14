import { Directive, ElementRef, HostListener, OnInit,Input } from '@angular/core';

// external lib to animate scroll top effect - https://stanko.github.io/animated-scroll-to/
import animateScrollTo from 'animated-scroll-to';


@Directive({
  selector: '[scrollTop]'
})


export class ScrollTopDirective implements  OnInit{
  private _defaultLimit = 150;

  constructor( private element: ElementRef ) { }

  ngOnInit() :void {
    this._toggleElemenet(false);
  }


  @Input() set defaultLimit(_limit: number){
    this._defaultLimit = _limit || this._defaultLimit;
  }

  @Input('scrollTop') showLimit: number;

  @HostListener('click')
  onClick() {
    // default options
    const options = {
      // duration of the scroll per 1000px, default 500
      speed: 500,
      // maximum duration of the scroll
      maxDuration: 1000,
      // should animated scroll be canceled on user scroll/keypress
      cancelOnUserAction: false
    };

    animateScrollTo(0, options)
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(_event) {
    let currentScrollTop = document.body.scrollTop;
    let currentLimit = this.showLimit || this._defaultLimit;

    if(currentScrollTop > currentLimit) {
      this._toggleElemenet(true);
    }else{
      this._toggleElemenet(false);
    }
  }


  private _toggleElemenet(_show:boolean = false):void {
    if(_show){
      this.element.nativeElement.style.opacity = '1';
      this.element.nativeElement.style.pointerEvents = '';
    }else{
      this.element.nativeElement.style.opacity = '0';
      this.element.nativeElement.style.pointerEvents = 'none';
    }
  }
}
