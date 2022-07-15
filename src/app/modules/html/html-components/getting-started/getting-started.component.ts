import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  displayedColumns: string[] = ['name', 'meaning', 'purpose'];
  dataSource = [
      {
        name: "<b>",
        meaning: "Bold",
        purpose: "Highlight important information"
      },
      {
        name: "<strong>",
        meaning: "Strong",
        purpose: "Similarly to bold, to highlight key text"
      },
      {
        name: "<i>",
        meaning: "Italic",
        purpose: "To denote text"
      },
      {
        name: "<em>",
        meaning: "Emphasised Text",
        purpose: "Usually used as image captions"
      },
      {
        name: "<mark>",
        meaning: "Marked Text",
        purpose: "Highlight the background of the text"
      },
      {
        name: "<small>",
        meaning: "Small Text",
        purpose: "To shrink the text"
      },
      {
        name: "<strike>",
        meaning: "Striked Out Text",
        purpose: "To place a horizontal line across the text"
      },
      {
        name: "<u>",
        meaning: "Underlined Text",
        purpose: "Used for links or text highlights"
      },
      {
        name: "<ins>",
        meaning: "Inserted Text",
        purpose: "Displayed with an underline to show an inserted text"
      },
      {
        name: "<sub>",
        meaning: "Subscript Text",
        purpose: "Typographical stylistic choice"
      },
      {
        name: "<sup>",
        meaning: "Superscript Text",
        purpose: "Another typographical presentation style"
      },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
