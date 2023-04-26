import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pablo';
  age = 33;
  btDisable = true;
  person = {
    name: 'Nicolas',
    age: 33,
    avatar: 'https://cdn.pixabay.com/photo/2023/04/18/18/38/atv-7935771__340.jpg'
  }
  toggleButton(){
    this.btDisable = !this.btDisable;
  }
  increseAge(){
    this.person.age +=1;
  }
  onScroll(event:Event){
    const element= event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event:Event){
    const element= event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }
}
