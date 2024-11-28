import { Component, HostListener, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService, RegisterDetails } from '../../shared/api.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent implements AfterViewInit {
  private currentSlide: number = 0;
  private slides!: NodeListOf<HTMLElement>; // Use definite assignment assertion
  private totalSlides: number = 0; // Initialize to zero

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registrationForm = this.fb.group({
      role: ['student', Validators.required], // Default to 'student'
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      course: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.slides = document.querySelectorAll<HTMLElement>('.slide');
    this.totalSlides = this.slides.length;
    this.scrollAnimation();
    this.startImageSlider(); // Start the image slider
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollAnimation();
  }

  private scrollAnimation(): void {
    const boxes = document.querySelectorAll('.info__box') as NodeListOf<HTMLElement>;
    const triggerPoint = window.innerHeight / 1.3;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerPoint) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  }

  private startImageSlider(): void {
    this.showSlide(this.currentSlide);
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private showSlide(index: number): void {
    const slidesContainer = document.querySelector<HTMLElement>('.slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  public nextSlide(): void { // Changed to public
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  public prevSlide(): void { // Changed to public
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  onMouseEnter(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('hovered');
  }

  onMouseLeave(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('hovered');
  }

  // Add public methods for arrow clicks
  public handleNext(): void {
    this.nextSlide();
  }

  public handlePrev(): void {
    this.prevSlide();
  }


  onSubmit(): void {
    console.log('Form Submitted:', this.registrationForm.value);

    if (this.registrationForm.valid) {
      const payload: RegisterDetails = {
        email: this.registrationForm.value.email,
        fullName: this.registrationForm.value.fullName,
        password: this.registrationForm.value.password,
        date: this.registrationForm.value.date,
        address: this.registrationForm.value.address,
        course: this.registrationForm.value.course,
        phone: this.registrationForm.value.phone,
        role: this.registrationForm.value.role,
      }
      this.apiService.register(payload).subscribe(response => {
        console.log(response);
      }, err => { console.log("Error occurred ", err) });
    } else {
      console.error('Form is invalid');
    }
  }
}
