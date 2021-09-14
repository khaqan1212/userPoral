import { LightningElement , wire, track, api} from 'lwc';

import getBuildingInfo from '@salesforce/apex/BuildingAccountController.getBuildingInfo';
import getAccountInfo from '@salesforce/apex/BuildingAccountController.getAccountInfo';
import getTermField from '@salesforce/apex/BuildingAccountController.getTermField';
import getBuildingAddressField from '@salesforce/apex/BuildingAccountController.getBuildingAddressField';
import getFreeRentField from '@salesforce/apex/BuildingAccountController.getFreeRentField';

export default class BuildingInformation extends LightningElement {
  @api recordId
  @track buildingInfos
  @track error
  @track accountInfos
  @track termField
  @track buildingAddress
  @track freeRentField
  


  @wire(getBuildingInfo,{recordId:'$recordId'})
  wiredBuildingInfo({error, data}){
      if(data){
          this.buildingInfos = data;
          this.error = undefined;
          console.log(this.recordId);
      } else if(error){
        this.error = error;
        this.buildingInfos = undefined;
        
        }
  }

  @wire(getAccountInfo,{recordId:'$recordId'})
  wiredAccountInfo({error, data}){
      if(data){
          this.accountInfos = data;
          this.error = undefined;
          console.log(this.recordId);
      } else if(error){
        this.error = error;
        this.accountInfos = undefined;
        
        }
  }

  @wire(getTermField,{recordId:'$recordId'})
  wiredTermField({error, data}){
      if(data){
          this.termField = data;
          this.error = undefined;
          console.log('Term field: '+this.termField);
      } else if(error){
        this.error = error;
        this.termField = undefined;
        }
  }

  @wire(getBuildingAddressField,{recordId:'$recordId'})
  wiredAddressField({error, data}){
      if(data){
          this.buildingAddress = data;
          this.error = undefined;
      } else if(error){
          this.error = error;
          this.buildingAddress = undefined;
        }
  }

  @wire(getFreeRentField,{recordId:'$recordId'})
  wiredFreeRentField({error, data}){
      if(data){
          this.freeRentField = data;
          this.error = undefined;
      } else if(error){
          this.error = error;
          this.freeRentField = undefined;
        }
  }

  
}