import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { FileSizeComponent } from './file-size/file-size.component';
import { HomeComponent } from './home.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'file-size-pipe',
    component: FileSizeComponent,
  },
  {
    path: 'async-pipe',
    component: AsyncComponent,
  },
  {
    path: 'loading-pipe',
    component: LoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
