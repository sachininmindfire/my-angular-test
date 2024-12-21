import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CardComponent
],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articleGroup: FormGroup;
  dynamictype: string = 'text';
  post: any;

  constructor(private formBuilder: FormBuilder) {
    this.articleGroup = this.formBuilder.group({
      title: [''],
      content: [''],    
    });
  }

  ngOnInit() {
   
  }

  onSubmit(post: any) {
    this.post = post;
  }
}
