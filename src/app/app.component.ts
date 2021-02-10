import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  register: any = {
    location: "",
    jobdescription: ""
  };

  constructor() {}

  ngOnInit() {}

  onSearch() {}

  onSubmit() {}
}
