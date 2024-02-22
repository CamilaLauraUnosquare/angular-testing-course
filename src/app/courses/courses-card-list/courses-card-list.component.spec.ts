import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { CoursesModule } from "../courses.module";
import { COURSES } from "../../../../server/db-data";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { sortCoursesBySeqNo } from "../home/sort-course-by-seq";
import { Course } from "../model/course";
import { setupCourses } from "../common/setup-test-data";
import { AppModule } from "../../app.module";

describe("Courses Card ListComponent", () => {
   let component: CoursesCardListComponent;
   let fixture: ComponentFixture<CoursesCardListComponent>;
   let el: DebugElement;

   beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
       imports: [CoursesModule],
     })
       .compileComponents()
       .then(() => {
         fixture = TestBed.createComponent(CoursesCardListComponent);
         component = fixture.componentInstance;
         el = fixture.debugElement;
       });
   }));

  it("Should create the component", () => {
    expect(component).toBeTruthy();
  });
  it("Should display the course lsit", () => {pending();});
  it("Should display the first course", () => {pending();});
});
