import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {User,Search,ChevronRight,Plus,Instagram,Youtube,CornerDownLeft,Share2,HelpCircle,Star,ChevronDown,Filter,Check} from 'angular-feather/icons';

const icons = {
 User,Search,ChevronRight,Plus,Instagram,Youtube,CornerDownLeft,Share2,HelpCircle,Star,ChevronDown,Filter,Check
};
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
