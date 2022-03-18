import { Component, Input} from "@angular/core";

@Component ({
selector: "event-thumbnail",
template:`
<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>date: {{event?.date}}</div>
  <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
    time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(early start)</span>
    <span *ngSwitchCase="'10:00 am'">(late start)</span>
    <span *ngSwitchDefault>(normal start)</span>
  </div>
  <div>price: \${{event?.price}}</div>
  <div *ngIf="event?.location">
    <span>location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div *ngIf="event?.onlineUrl">
    online Url: {{event?.onlineUrl}}
  </div>
</div>
`
,
styles: [`
.thumbnail {min-height: 210px}
.pad-left { margin-left: 10px; }
.well div { color: #bbb; }
`]
})

export class EventThumbnailComponent {
@Input() event: any

getStartTimeStyle():any {
  if (this.event && this.event.time === '8:00 am')
  return {color: 'green', 'font-weight': 'bold'}
  return []
}
}
