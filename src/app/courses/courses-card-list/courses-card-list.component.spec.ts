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
  let el: DebugElement; // interac with the DOM

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
  it("Should display the course list", () => {
    //pass data to the compoent
    //arrange
    component.courses = setupCourses();
    fixture.detectChanges();

    //console.log(el.nativeElement.outerHTML);

    //act
    const cards = el.queryAll(By.css(".course-card"));

    //assert
    expect(cards).toBeTruthy("Could not find cards");
    expect(cards.length).toBe(12, "Unexpected number of courses");
  });
  it("Should display the first course", () => {
    //arrange
    component.courses = setupCourses();
    fixture.detectChanges();
    const course = component.courses[0];

    const card = el.query(By.css(".course-card:first-child")),
      title = card.query(By.css("mat-card-title")),
      image = card.query(By.css("img"));

    expect(card).toBeTruthy("expects a course");
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);
  });
});
