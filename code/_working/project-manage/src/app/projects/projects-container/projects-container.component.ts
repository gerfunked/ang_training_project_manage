import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = []; // MOCK_PROJECTS;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.list().subscribe((data) => {
      this.projects = data;
    });
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    const index = this.projects.findIndex(
      (Element) => Element.id === project.id
    );
    this.projects[index] = project;
  }
}
