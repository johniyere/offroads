import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../editor.state';
import { SetDifficulty, SetScenary, SetDescription } from '../../editor.actions';


@Component({
  selector: 'ofr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  difficultyRange = {
    max: 5,
    min: 1
  };

  scenaryRange = {
    max: 3,
    min: 1
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    ) { }

  detailsForm = this.fb.group({
    difficulty: [1],
    scenary: [1],
    description: ['']
  });

  ngOnInit() {
  }

  onDifficultyInputChange() {
    const difficulty = this.detailsForm.value.difficulty as number;
    this.store.dispatch(new SetDifficulty({ difficulty }));
  }

  onScenaryInputChange() {
    const scenary = this.detailsForm.value.scenary as number;
    this.store.dispatch(new SetScenary({ scenary }));
  }

  onDescriptionInputBlur() {
    const description = this.detailsForm.value.description as string;
    this.store.dispatch(new SetDescription({ description }));
  }

}
