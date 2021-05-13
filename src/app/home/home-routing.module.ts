import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardGuard } from '../authguard.guard';

import { HomepageComponent } from './homepage/homepage.component';
import { NeworatinglistComponent } from './neworatinglist/neworatinglist.component';
import { NeworatingdetailComponent } from './neworatingdetail/neworatingdetail.component';
import { InfluencerSignupComponent } from './influencer-signup/influencer-signup.component';
import { PriceComponent } from './price/price.component';
import { SubcriptionComponent } from './subcription/subcription.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent, canActivate: [AuthguardGuard]},
  {path:'ratinglist', component:NeworatinglistComponent, canActivate: [AuthguardGuard]},
  {path:'ratingdetail',component:NeworatingdetailComponent, canActivate: [AuthguardGuard]},
  {path:'influencersignup',component:InfluencerSignupComponent, canActivate: [AuthguardGuard]},
  {path:'pricing', component:PriceComponent, canActivate: [AuthguardGuard]},
  {path:'subcription/:username', component:SubcriptionComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
