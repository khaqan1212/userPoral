import { LightningElement , wire, track} from 'lwc';

import getBuildingInfo from '@salesforce/apex/BuildingAccountController.getBuildingInfo';

export default class BuildingInformation extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }

  @track buildingInfos
  @track error
  
  @wire(getBuildingInfo)
  wiredBuildingInfo({error, data}){
      if(data){
          this.buildingInfos = data;
          this.error = undefined;
      } else if(error){
        this.error = error;
        this.buildingInfos = undefined;
      }
  }
}