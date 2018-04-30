import { Component, OnInit,OnDestroy,Input, ViewChild, ComponentFactoryResolver,NgZone } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cloud-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss'],
  })
  export class ConfigComponent implements OnInit, OnDestroy {

    constructor(private modalService: NgbModal) { }
    
    app_name:string = '';
    app_desc:string = '';
    app_min_inst:string = '';
    app_max_inst:string = '';
    ngOnInit(){

    }

    ngOnDestroy(){

    }

    reset(){
      this.app_name = "";
      this.app_desc = "";
      this.app_min_inst = "0";
      this.app_max_inst = "0";
    }

    showConfirmModal() {
      const activeModal = this.modalService.open(ModalComponent, {
        size: 'sm',
        backdrop: 'static',
        container: 'nb-layout',
        centered:true,
      });
  
      activeModal.componentInstance.modalHeader = 'Alert';
      activeModal.componentInstance.modalContent = `Confirm to submit?`;

      activeModal.result.then((userResponse) => {
        console.log(`User's choice: ${userResponse}`)
      });  
    }


    
  }