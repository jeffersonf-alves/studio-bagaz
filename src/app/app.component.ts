import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studio-bagaz';
  activeTitle: boolean = true
  changeImg: number = 2

  
  ngOnInit(): void {
    setInterval(() => {
      switch(this.changeImg) {
        case 1:
          this.changeImg = 2
          break
        case 2:
          this.changeImg = 3
          break
        case 3:
          this.changeImg = 1
          break
      }
      
    }, 2000);
   
  }


}
