import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IAnimation, IAnimationFields } from '@the/utility/models';

@Component({
  selector: 'the-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {
  @Input() config!: IAnimationFields;
  @Input() height!: number;
  @Input() width!: number;
  @Input() totalFrames!: number;
  @Input() imageUrl!: string;
  @Input() loop!: number;
  @Output() finished: EventEmitter<void> = new EventEmitter();

  public loading = true;

  public get totalWidth(): number {
    return this.width * this.totalFrames;
  }

  public get imageSrc(): SafeResourceUrl {
    return this.sanitier.bypassSecurityTrustResourceUrl(this.imageUrl);
  }

  constructor(public sanitier: DomSanitizer) {}

  ngOnInit(): void {}
}
