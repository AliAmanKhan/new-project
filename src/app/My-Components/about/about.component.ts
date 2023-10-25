import { Component, ElementRef, OnInit, ViewChild   } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('imageSlider') imageSlider: ElementRef | undefined;

  images = [
    { url: '../../../assets/tpoGallery/college.jpg', caption: 'Image 1' },
    { url: '../../../assets/tpoGallery/principal.jpg', caption: 'Image 2' },
    { url: '../../../assets/tpoGallery/admin GECJ.jpg', caption: 'Image 3' },
    // Add more images as needed
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.scrollToCurrentSlide();
    }, 5000);
  }

  scrollToCurrentSlide() {
    if (this.imageSlider) {
      const slideWidth = this.imageSlider.nativeElement.offsetWidth;
      this.imageSlider.nativeElement.scrollLeft = this.currentIndex * slideWidth;
    }
  }

}
