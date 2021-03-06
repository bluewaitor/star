import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {DashBoardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
/**
 * 页面的容器
 */
import {SiderComponent} from './sider/sider.component';
import {UserComponent} from './user/user.component';
import {UserAddComponent} from './user/user-add.component';
import {ArticleComponent} from'./article/article.component';
import {AddArticleComponent} from './article/add-article.component';
import {EditArticleComponent} from './article/edit-article.component';
import {TodoComponent} from './todo/todo.component';
import {TagComponent} from './tag/tag.component';

@NgModule({
  imports: [
    SharedModule,
    DashBoardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    UserAddComponent,
    ArticleComponent,
    SiderComponent,
    AddArticleComponent,
    EditArticleComponent,
    TodoComponent,
    TagComponent
  ],
})
export class DashboardModule {

}
