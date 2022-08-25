import { Component, EventEmitter, Input, OnInit, Output, platformCore } from '@angular/core';
import { Subject ,debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
ngOnInit(): void {
 this.debouncer
 .pipe(
  debounceTime(300)
 )
 .subscribe( valor => {
  this.onDebounce.emit(valor);
 });
}
termino: string = '';
debouncer: Subject<string> = new Subject();
@Input() placeholder: string = '';
@Output() onEnter: EventEmitter<string> = new EventEmitter();
@Output() onDebounce: EventEmitter<string> = new EventEmitter();
buscar(){
  this.onEnter.emit(this.termino);
};
teclaPresionada(){
   this.debouncer.next(this.termino);
}

}
