import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-set-popover',
  templateUrl: './add-set-popover.component.html',
  styleUrls: ['./add-set-popover.component.scss'],
})
export class AddSetPopoverComponent  implements OnInit {
  @Input() set: any; //FIX ME
  setForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { 
    this.setForm = this.fb.group({
      weight: new FormControl("", Validators.required),
      reps: new FormControl("", Validators.required),
    })
  }

  ngOnInit() {}

}
