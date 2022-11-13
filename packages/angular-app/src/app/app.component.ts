import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    if (this.form.valid) {
      this.sendAction(this.form.getRawValue());
    }
  }

  private sendAction(data: any): void {
    dispatchEvent(new CustomEvent<string>('addRecord', {detail: data}));
  }

  private initForm(): void {
    this.form = this.fb.group({
      type: new FormControl('PMD', [Validators.required]),
      date: new FormControl({value: (new Date()).toLocaleDateString(), disabled: true}, [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern(/[0-9]+(\.[0-9]+)?/)]),
    })
  }
}
