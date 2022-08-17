import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Burger } from 'src/models/Produits.model';
import { ProduitsService } from '../../service/produits.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
@Input() chosen!: string


constructor(private http: HttpClient,private prodServ:ProduitsService) { }

  ngOnInit(): void {
  console.log(this.prodServ.getValue());
      
  }
//   createProduct(products:{"nom":string, "prix":string, "bImage":string}){
//     console.log(products);
//     // this.http.post<any>("http://127.0.0.1:8000/api/burgers",products).subscribe(data=>{})
//   }
//   ajouter(){
//     console.log(this.groupe.value);
//     // console.log(this.groupe.value.prenom) pour acceder au prenom;
//   }

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }
imageSrc!: string;
myForm = new FormGroup({
 nom: new FormControl(),
 prix: new FormControl(),
 image: new FormControl(),
 bImage: new FormControl()
});

 
get f(){
 return this.myForm.controls;
}

onFileChange(event:any) {
 const reader = new FileReader();
 
 if(event.target.files && event.target.files.length) {
   const [image] = event.target.files;
   reader.readAsDataURL(image);
 
   reader.onload = () => {

     this.imageSrc = reader.result as string;
  
     this.myForm.patchValue({
       bImage: reader.result
     });

   };

 }
}

submit(){
 this.http.post('http://127.0.0.1:8000/api/burgers', this.myForm.value)
   .subscribe(res => {
    //  console.log(res);
     alert('Uploaded Successfully.');
   })
}

  
}
