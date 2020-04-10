import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCountingBy } from '../../reducers';
import * as actions from '../../actions/counter.actions';
@Component({
  selector: 'app-counting-by',
  templateUrl: './counting-by.component.html',
  styleUrls: ['./counting-by.component.scss']
})
export class CountingByComponent implements OnInit {

  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.by$ = this.store.select(selectCountingBy);
  }

  countBySet(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}
