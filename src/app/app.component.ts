import { Component, Optional } from '@angular/core';
import { LoggerService } from '@my/core';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hola mundo";

  //constructor(@Optional() out?:LoggerService) {
  //  if (out){
  //  out.error('Este es un error')
  //  out.warn('Este es un warn')
  //  out.info('Esto es un info')
  //  out.log('Esto es un log')
  //}
  //}

  //constructor(private notify: NotificationService) {}

  //ngOnInit(): void {
  //  this.notify.add('Inicio la aplicación', NotificationType.info)
  //}

}
