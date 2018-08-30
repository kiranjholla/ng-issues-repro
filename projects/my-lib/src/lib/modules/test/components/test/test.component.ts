import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'lib-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test = '';

  constructor(private service: TestService) { }

  ngOnInit() {
    this.test = this.service.get('test');
  }

}
