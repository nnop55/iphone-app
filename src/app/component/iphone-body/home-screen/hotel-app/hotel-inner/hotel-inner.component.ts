import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-inner',
  templateUrl: './hotel-inner.component.html',
  styleUrls: ['./hotel-inner.component.css']
})
export class HotelInnerComponent implements OnInit {
  checkInInp: any;
  checkOutInp: any;

  checkInDate: any;
  diffInMs: any;

  differenceBtwReserve: number = 1;

  todayDate: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  currentHotel: any;

  currentSlide: any = 0;

  cancelationDays!: number;
  rxTime: any = new Date();
  tmpDate: any;

  showAllPlaceOffers: boolean = false;

  @ViewChild('widgetsContent') widgetsContent!: ElementRef;


  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];
      this.getHotelById(id)
    });

    this.setActiveSlide();

    console.log(this.differenceBtwReserve)

  }

  getHotelById(id: string) {
    this.http.getHotelById(id).subscribe((res: any) => {
      this.cancelationDays = res.freeCancellationDaysCount;
      this.currentHotel = res;
      console.log(this.currentHotel)

      this.calculateDate();
    })
  }

  calculateDate() {
    this.rxTime.setDate(this.rxTime.getDate() + this.cancelationDays);
    this.tmpDate = this.rxTime.toDateString()
  }

  setActiveSlide() {
    const slides = document.querySelectorAll('.slides img');

    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === this.currentSlide) {
        slide.classList.add('active');
      }
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.currentHotel.mainImages.length;
    this.setActiveSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.currentHotel.mainImages.length) % this.currentHotel.mainImages.length;
    this.setActiveSlide();
  }

  scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo(
      { left: (this.widgetsContent.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

  scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo(
      { left: (this.widgetsContent.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }


  checkIn(event: MatDatepickerInputEvent<Date>) {
    this.checkInInp = event.value
    this.checkInDate.setDate(this.checkInDate.getDate() + 1);
  }

  checkOut(event: MatDatepickerInputEvent<Date>) {
    this.checkOutInp = event.value

    const diffInMs = Math.abs(this.checkInInp - this.checkOutInp);
    this.diffInMs = diffInMs / (1000 * 60 * 60 * 24);
    this.differenceBtwReserve = this.diffInMs + 1;
  }


}


