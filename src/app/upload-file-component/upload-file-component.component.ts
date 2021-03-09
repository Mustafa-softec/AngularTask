import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file-component',
  templateUrl: './upload-file-component.component.html',
  styleUrls: ['./upload-file-component.component.css']
})
export class UploadFileComponentComponent implements OnInit {

  constructor() { }

@Output() notifySelected:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.url = "\\assets\\user_temp.png";
  }

url: any;

public message: string;

selectedPath : File = null;

  onFileChoosed(event){
    console.log(event);
    
    if (event.length === 0)
    return;

    if (event.target.files && event.target.files[0]) {

      this.selectedPath = <File>event.target.files[0];
      
      if (this.selectedPath.type.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      
      
      reader.readAsDataURL(this.selectedPath ); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

   str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
}
