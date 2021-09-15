import { LightningElement , wire, track, api} from 'lwc';

import getBuildingInfo from '@salesforce/apex/BuildingAccountController.getBuildingInfo';
import getAccountInfo from '@salesforce/apex/BuildingAccountController.getAccountInfo';
import getTermField from '@salesforce/apex/BuildingAccountController.getTermField';
import getBuildingAddressField from '@salesforce/apex/BuildingAccountController.getBuildingAddressField';
import getFreeRentField from '@salesforce/apex/BuildingAccountController.getFreeRentField';
import getTIsField from '@salesforce/apex/BuildingAccountController.getTIsField';
import getCriticalDates from '@salesforce/apex/BuildingAccountController.getCriticalDates';
import getLeases from '@salesforce/apex/BuildingAccountController.getLeases';
import getIndividualLeaseDocuments from '@salesforce/apex/BuildingAccountController.getIndividualLeaseDocuments';
import urlsOfLeasesMap from '@salesforce/apex/BuildingAccountController.urlsOfLeasesMap';

export default class BuildingInformation extends LightningElement {
  @api recordId
  @track buildingInfos
  @track error
  @track accountInfos
  @track termField
  @track buildingAddress
  @track freeRentField
  @track TIsField
  @track criticalDates
  @track leases
  @track individualLeaseDocuments
  @track urls = []
  


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

  @wire(getTIsField,{recordId:'$recordId'})
  wiredTIsField({error, data}){
      if(data){
          this.TIsField = data;
          this.error = undefined;
          console.log(this.TIsField);
      } else if(error){
          this.error = error;
          this.TIsField = undefined;
        }
  }

  @wire(getCriticalDates,{recordId:'$recordId'})
  wiredcriticalDates({error, data}){
      if(data){
          this.criticalDates = data;
          this.error = undefined;
          console.log(this.TIsField);
      } else if(error){
          this.error = error;
          this.criticalDates = undefined;
        }
  }
  
  @wire(getLeases,{recordId:'$recordId'})
  wiredLeases({error, data}){
      if(data){
          this.leases = data;
          this.error = undefined;
          console.log(this.leases);
      } else if(error){
          this.error = error;
          this.leases = undefined;
        }
  }

  @wire(getIndividualLeaseDocuments,{recordId:'$recordId'})
  wiredIndividualLeases({error, data}){
      if(data){
          this.individualLeaseDocuments = data;
          this.error = undefined;
          console.log(this.individualLeaseDocuments);
      } else if(error){
          this.error = error;
          this.individualLeaseDocuments = undefined;
        }
  }

  @wire(urlsOfLeasesMap,{recordId:'$recordId'})
  wiredURLs({error, data}){
      if(data){
        for(let key in data) {
            // Preventing unexcepted data
            if (data.hasOwnProperty(key)) { // Filtering the data in the loop
                this.urls.push({key: key, value: data[key]});
            }
        }
          this.error = undefined;
          console.log('URLS: '+this.urls);
      } else if(error){
          this.error = error;
          this.urls = undefined;
        }
  }

  getURL(id) {
      return '/lightning/r/Account/' + id +'/view';
  }
}