import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

// external lib to animate scroll top effect - https://stanko.github.io/animated-scroll-to/
import animateScrollTo from 'animated-scroll-to';


@Directive({
  selector: '[scrollTop]'
})


export class ScrollTopDirective implements  OnInit {
  private _defaultLimit = 150;

  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
    this._toggleElementVisibility(false);
  }
  @Input('scrollTop') showLimit: number;

  @Input() set defaultLimit(_limit: number){
    this._defaultLimit = _limit || this._defaultLimit;
  }

  @HostListener('click')
  onClick() {
    // default options
    const options = {
      // duration of the scroll per 1000px, default 500
      speed: 300,
      // maximum duration of the scroll
      maxDuration: 1000,
      // should animated scroll be canceled on user scroll/keypress
      cancelOnUserAction: false
    };

    animateScrollTo(0, options);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(_event) {
    let currentScrollTop = document.body.scrollTop;
    let currentLimit = this.showLimit || this._defaultLimit;

    if (currentScrollTop > currentLimit) {
      this._toggleElementVisibility(true);
    }else {
      this._toggleElementVisibility(false);
    }
  }


  private _toggleElementVisibility(_show = false): void {
    if (_show) {
      this.element.nativeElement.style.opacity = '1';
      this.element.nativeElement.style.pointerEvents = '';
    }else {
      this.element.nativeElement.style.opacity = '0';
      this.element.nativeElement.style.pointerEvents = 'none';
    }
  }
}
