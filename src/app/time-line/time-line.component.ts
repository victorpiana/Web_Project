  import { Component, OnInit, AfterViewInit } from '@angular/core';

  @Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.css']
  })
  export class TimeLineComponent implements OnInit , AfterViewInit{

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
      this.initTimeline();
      this.initProgressBar();
    }

    initTimeline() {
      const qs = (selector: string, all = false) => all ? document.querySelectorAll(selector) : document.querySelector(selector);
      const sections = qs('.section', true) as NodeListOf<HTMLElement>;
      const timeline = qs('.timeline') as HTMLElement;
      const line = qs('.line') as HTMLElement;
      line.style.bottom = `calc(100% - 20px)`;
      let prevScrollY = window.scrollY;
      let up, down;
      let full = false;
      let set = 0;
      const targetY = window.innerHeight * .8;

      const scrollHandler = () => {
        const scrollY = window.scrollY;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();

        const dist = targetY - timelineRect.top;

        if (down && !full) {
          set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        }

        if (dist > timeline.offsetHeight + 50 && !full) {
          full = true;
          line.style.bottom = `-50px`;
        }

        sections.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
          }
        });

        prevScrollY = window.scrollY;
      };

      scrollHandler();
      line.style.display = 'block';
      window.addEventListener('scroll', scrollHandler);
    }

    initProgressBar() {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const progress = (scrollTop / (documentHeight - window.innerHeight)) * 100;
        const progressBar = document.querySelector('.progress-bar') as HTMLElement;
        const progressContainer = document.querySelector('.progress-container') as HTMLElement;
        if (scrollTop == 0) {
          progressBar.style.width = '0%';
          progressBar.style.height = '5px';
          progressContainer.style.height = '5px';
        } else {
          progressBar.style.height = '15px';
          progressContainer.style.height = '15px';
          progressBar.style.width = progress + '%';
          progressBar.style.backgroundColor = '#0d0d0d';
        }
      });
    }
  }
