import { Component, OnInit, Input } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service';
import { Post } from '../../typescript/interfaces';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  @Input() title!: string;
  @Input() output!: Post | Post[];
  @Input() input?: string;

  panelOpenState: boolean = false;
  constructor(private http: CustomHttpClientService) {}

  ngOnInit(): void {}
}
