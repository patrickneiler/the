import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IAnimationFields } from '@the/utility/models';
import anime, {
  AnimeAnimParams,
  AnimeCallBack,
  AnimeInstance,
  AnimeParams,
  AnimeTimelineInstance,
} from 'animejs';
import {
  debounceTime,
  interval,
  map,
  of,
  switchMap,
  takeUntil,
  takeWhile,
} from 'rxjs';
@Directive({
  selector: '[theAnimation]',
})
export class AnimationDirective implements OnInit {
  @Input() theAnimation?: IAnimationFields | undefined;
  @Input() height!: number;
  @Input() width!: number;
  @Input() totalFrames!: number;
  @Input() startFrame!: number;
  @Input() endFrame!: number;
  @Input() loop!: number;
  @Input() duration!: number;
  @Output() finished: EventEmitter<void> = new EventEmitter();
  private _timeline!: AnimeTimelineInstance;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    if (this.el) {
      this._timeline = anime.timeline({
        direction: 'normal',
        autoplay: true,
        loop: this.loop === 0,
        duration: 2,
        endDelay: 500,
        easing: 'linear',
        complete: (anim: AnimeInstance) => this.complete(anim),
      });
      interval(100)
        .pipe(
          takeWhile((iteration) => iteration <= this.totalFrames - 1),
          map((iteration) => {
            this._timeline.add({
              targets: this.el.nativeElement,
              delay: iteration <= this.totalFrames - 1 ? 50 : 0,
              translateX: iteration * -1 * this.width + 'px',
            });
            if (iteration === this.totalFrames - 1) {
              this.finished.emit();
            }
            return iteration;
          })
        )
        .subscribe((it) => {});
    }
  }

  complete(animation: AnimeInstance) {
    if (this.loop > 0) {
      animation.pause();
      animation.restart();
      this.finished.emit();
    }
  }

  @HostListener('click')
  click(): void {
    this._timeline.play();
  }
}
