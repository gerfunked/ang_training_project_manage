import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project!: Project;

  @Output()
  cancel = new EventEmitter<void>();
  @Output()
  save = new EventEmitter<any>();

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.project.description),
      budget: new FormControl(this.project.budget),
      isActive: new FormControl(this.project.isActive),
    });
  }

  projectForm: FormGroup = new FormGroup({});

  onSubmit() {
    console.log('Submitting');
    if (this.projectForm.invalid) {
      return;
    }

    const updatedProject = Object.assign(
      {},
      this.project,
      this.projectForm.value
    );

    this.save.emit({ project: updatedProject });
  }

  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }
}
