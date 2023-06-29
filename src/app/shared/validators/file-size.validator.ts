import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

// export function fileSizeValidator() {
//     return function (control: FormControl) {
//       const file = control.value;
//       if ( file < 5) {
//           return {
//             requiredFileSize: true
//           };
        
//         return null;
//       }
  
//       return null;
//     };
//   }

export class fileSizeValidator{
    static requiredFileSize(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        return new Promise((resolve => {
                if(control.value.size < 1000){
                    resolve({requiredFileSize : true})
                }else{
                    resolve(null);
                }
        }))
    }
}