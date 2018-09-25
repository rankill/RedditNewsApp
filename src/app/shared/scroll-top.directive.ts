import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

// external lib to animate scroll top effect - https://stanko.github.io/animated-scroll-to/
import animateScrollTo from 'animated-scroll-to';


@Directive({
  selector: '[scrollTop]'
})


export class ScrollTopDirective implements  OnInit {
  @Input('scrollTop') showLimit: number;

  @Input() set defaultLimit(_limit: number){
    this._defaultLimit = _limit || this._defaultLimit;
  }


  private _defaultLimit = 150;

  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
    this._toggleElementVisibility(false);
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
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const currentLimit = this.showLimit || this._defaultLimit;
    const show = currentScrollTop > currentLimit;

    this._toggleElementVisibility(show);
  }


  private _toggleElementVisibility(_show = false): void {
    this.element.nativeElement.style.opacity = _show ? '1' : '0';
    this.element.nativeElement.style.pointerEvents = _show ? '' : 'none';
  }
}
