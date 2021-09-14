import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: 'star.component.html',
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {

    @Input() rating: number = 0
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    onClick(): void {
        this.ratingClicked.emit(`Rating is ${this.rating}`);
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5
    }
}