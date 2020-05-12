import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-form-plan',
  templateUrl: './form-plan.component.html',
  styleUrls: ['./form-plan.component.css']
})
export class FormPlanComponent implements OnInit {
  public curs: Icourse;
  public tempCurs: Icourse;
  public cursInput: string ;
  public editNameCours: string;
  public activeIndex: number;
  public isEditBtn: boolean = false;

  public curses: Array<Icourse> = [
    {
      nameCourse: 'HTML 5',
      isCheck: true,
      progresText: ''
    },
    {
      nameCourse: 'CSS3',
      isCheck: true,
      progresText: ''
    },
    {
      nameCourse: 'SCSS',
      isCheck: false,
      progresText: ''
    },
    {
      nameCourse: 'JavaScript',
      isCheck: true,
      progresText: ''
    },
    {
      nameCourse: 'jQuery',
      isCheck: false,
      progresText: ''
    },
    {
      nameCourse: 'Angular',
      isCheck: false,
      progresText: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
    //  public trimString (st: string): string {
    //     return st.trim()
    //   }
  }

  public checkFun(event, ind: number): void {
    // console.log(this.activeIndex);
    this.activeIndex = ind
    // console.log(event.target.checked);
    // console.log(this.activeIndex);
    // console.log(this.curses[this.activeIndex].isCheck + ' this.curses[i].isCheck');
    this.curses[ind].isCheck = event.target.checked
    // console.log(this.curses[this.activeIndex].isCheck + ' this.curses[i].isCheck');
  }
  deleteFun(event, ind: number): void {
    this.curses.splice(ind, 1)
    console.log('Видалений елемент під номером ' + ind);
  }

  editFun(ind: number): void {
    this.activeIndex = ind
    this.isEditBtn = true

    this.editNameCours = this.curses[ind].nameCourse
  }
  saveFun(): void {
    if (this.editNameCours.trim() == '') {
      alert('Нова назва курсу не має бути пуста! ')
    } else {
      this.curses[this.activeIndex].nameCourse = this.editNameCours.trim()
      this.editNameCours = ''
      this.isEditBtn = false
    }

  }
  addFun(): void {
    // this.cursInput = this.cursInput.trim()
    // console.log(this.cursInput +' this.cursInput.length');
    if (!this.cursInput){
      alert('Введіть назву курсу!')
    } else {
      // this.cursInput = this.cursInput.trim()
    console.log(this.cursInput);
    this.tempCurs = {
      nameCourse: this.cursInput,
      isCheck: false,
      progresText: ''
    }
    this.curses.push(this.tempCurs)
    this.cursInput = ''
    }
  }
}



interface Icourse {
  nameCourse: string
  isCheck: boolean
  progresText: string
}
